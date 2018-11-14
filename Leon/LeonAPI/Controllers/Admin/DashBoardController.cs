using LeonAPI.Models;
using LeonModels;
using LeonModels.Admin;
using LeonModels.Capture;
using LeonModels.Catalogs;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading;
using System.Threading.Tasks;
using System.Transactions;
using System.Web.Http;


namespace LeonAPI.Controllers.Admin
{

    [Authorize(Roles = "Administrador")]
    [RoutePrefix("api/DashBoard")]
    public class DashBoardController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        [Route("QueryLastAssessments")]
        public async Task<HttpResponseMessage> QueryLastAssessments(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            List<DashBoardLastAssessments> questions = new List<DashBoardLastAssessments>();
            Dictionary<string, int> ranks = new Dictionary<string, int>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetAssessments(connection1, questions, ranks);

                    await GetPointUsers(connection1, questions, ranks);
                }

            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, questions);

        }


        private async Task GetAssessments(SqlConnection connection1, List<DashBoardLastAssessments> questions, Dictionary<string, int> ranks)
        {
            // BMI = HowHeightpts

            string strcommand = "SELECT top 20 " +
             "f.conversiontotal, u.firstname, u.lastname, a.Email " +
             ",an.age" +
             ",f.health, f.lifestyle, f.biodata, f.mobility, f.fitness " +
             ",f.datelocal " +
             ",u.email " +
             ",ci.City + ' ' + st.name + ' ' + co.ShortName as city  " +
             ",f.idform, f.userid " +
             "FROM " +
             "( " +
             "select userid, max(datelocal) as local " +
             "from Assessments " +
             "group by userid " +
             " ) " +
             "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
             "left join users u on f.userid = u.id " +
             "left join aspnetusers a on f.provider = a.id " +
             "left join AssessmentsAnswers an on f.idform = an.idform " +
             "left join cities ci on f.cityId = ci.id " +
             "left join state st on ci.StateId = st.id " +
             "left join country co on st.CountryId = co.id " +
             "order by f.datelocal desc ";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();


            while (await reader.ReadAsync())
            {
                DashBoardLastAssessments assessment = new DashBoardLastAssessments();
                assessment.Score = reader.GetInt32(0);
                assessment.Name = reader.GetString(1) + " " + reader.GetString(2);
                if (reader.IsDBNull(3))
                {
                    assessment.Assessor = "";
                }
                else
                {
                    assessment.Assessor = reader.GetString(3);
                }
                assessment.Age = reader.GetInt32(4);

                assessment.Health = reader.GetInt32(5);
                assessment.Lifestyle = reader.GetInt32(6);
                assessment.Biodata = reader.GetInt32(7);
                assessment.Mobility = reader.GetInt32(8);
                assessment.Fitness = reader.GetInt32(9);
                
                assessment.Location = "";

                assessment.dateLocal = reader.GetDateTime(10);
                assessment.email = reader.GetString(11);
                if (reader.IsDBNull(12))
                {
                    assessment.city = "";
                }
                else
                {
                    assessment.city = reader.GetString(12);
                }

                assessment.idForm = reader.GetString(13);

                assessment.userid = reader.GetString(14);

                questions.Add(assessment);

                ranks.Add(assessment.userid, 0);

            }

            reader.Close();


        }


        private async Task GetPointUsers(SqlConnection connection1, List<DashBoardLastAssessments> questions, Dictionary<string, int> ranks)
        {
            string strcommand = "SELECT f.userid, f.conversiontotal, f.datelocal " +
                                "FROM " +
                                "( " +
                                "select userid, max(datelocal) as local " +
                                "from Assessments " +
                                "group by userid " +
                                " ) " +
                                "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
                                "order by f.conversiontotal";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            int count = 1;
           
            while (await reader.ReadAsync())
            {
              
                if (ranks.ContainsKey(reader.GetString(0)))
                {
                    ranks[reader.GetString(0)] = count;
                }
                count++;
            }
            count--;

            reader.Close();

          
            foreach (DashBoardLastAssessments assessment in questions)
            {
                double rankPoints = ((double)ranks[assessment.userid] / (double)count) * 100;

                assessment.Percentile = (Int32)Math.Truncate(rankPoints);
            }

           
        }

        [Route("QueryTotalAssessments")]
        public async Task<HttpResponseMessage> QueryTotalAssessments(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            List<DashBoadTotalAssessments> questions = new List<DashBoadTotalAssessments>();
        
            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetAvarageAssessments(connection1, questions);

                }

            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, questions);

        }

        private async Task GetAvarageAssessments(SqlConnection connection1, List<DashBoadTotalAssessments> questions)
        {
            //needs improve remove fields not needs

            // BMI = HowHeightpts

            string strcommand = "SELECT f.conversiontotal, an.Age, ci.id " +
            "FROM " +
            "( " +
            "select userid, max(datelocal) as local " +
            "from Assessments " +
            "group by userid " +
            ") " +
            "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
            "left join AssessmentsAnswers an on f.idform = an.idform " +
            "left join cities ci on f.cityid = ci.id " +
            "order by f.datelocal desc ";
            
            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            int count = 0;
            DashBoadTotalAssessments question = new DashBoadTotalAssessments();

            Dictionary<int, string> cities = new Dictionary<int, string>();

            while (await reader.ReadAsync())
            {
                question.Score += reader.GetInt32(0);
                question.Age += reader.GetInt32(1);
                int city = 0;
                if (!reader.IsDBNull(2))
                {
                    city = reader.GetInt32(2);

                    if (!cities.ContainsKey(city))
                    {
                        cities.Add(city, "");
                    }
                }

                count++;
            }

            question.Total = count;
            question.Score = (Int32)Math.Round((double)question.Score / (double)count);
            question.Age = (Int32)Math.Round((double)question.Age / (double)count);
            question.Locations = cities.Count();

            questions.Add(question);

            reader.Close();


        }

        [Route("QueryTop10Assessments")]
        public async Task<HttpResponseMessage> QueryTop10Assessments(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            List<DashBoardTopBottomAssessments> questions = new List<DashBoardTopBottomAssessments>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetTop10Assessments(connection1, questions);

                }

            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, questions);

        }

        private async Task GetTop10Assessments(SqlConnection connection1, List<DashBoardTopBottomAssessments> questions)
        {
            //needs improve remove fields not needs

            // BMI = HowHeightpts

            string strcommand = "SELECT top 10 " +
             "f.conversiontotal, a.Email " +
             ",an.age" +
             ",f.health, f.lifestyle, f.biodata, f.mobility, f.fitness " +
             ",f.idform, f.userid " +
             "FROM " +
             "( " +
             "select userid, max(datelocal) as local " +
             "from Assessments " +
             "group by userid " +
             " ) " +
             "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
             "left join users u on f.userid = u.id " +
             "left join aspnetusers a on f.provider = a.id " +
             "left join AssessmentsAnswers an on f.idform = an.idform " +
             "left join cities ci on f.cityId = ci.id " +
             "left join state st on ci.StateId = st.id " +
             "left join country co on st.CountryId = co.id " +
             "order by f.conversiontotal desc ";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();


            while (await reader.ReadAsync())
            {
                DashBoardTopBottomAssessments assessment = new DashBoardTopBottomAssessments();
                assessment.Score = reader.GetInt32(0);
                if (reader.IsDBNull(1))
                {
                    assessment.Assessor = "";
                }
                else
                {
                    assessment.Assessor = reader.GetString(1);
                }
                assessment.Age = reader.GetInt32(2);

                assessment.Health = reader.GetInt32(3);
                assessment.Lifestyle = reader.GetInt32(4);
                assessment.Biodata = reader.GetInt32(5);
                assessment.Mobility = reader.GetInt32(6);
                assessment.Fitness = reader.GetInt32(7);

                assessment.idForm = reader.GetString(8);
                assessment.userid = reader.GetString(9);

                questions.Add(assessment);

            }

            reader.Close();

        }

        [Route("QueryBottom0Assessments")]
        public async Task<HttpResponseMessage> QueryBottom0Assessments(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            List<DashBoardTopBottomAssessments> questions = new List<DashBoardTopBottomAssessments>();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    await GetBottom10Assessments(connection1, questions);

                }

            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, questions);

        }

        private async Task GetBottom10Assessments(SqlConnection connection1, List<DashBoardTopBottomAssessments> questions)
        {
            //needs improve remove fields not needs

            // BMI = HowHeightpts

            string strcommand = "SELECT top 10 " +
            "f.conversiontotal, a.Email " +
            ",an.age" +
            ",f.health, f.lifestyle, f.biodata, f.mobility, f.fitness " +
            ",f.idform, f.userid " +
            "FROM " +
            "( " +
            "select userid, max(datelocal) as local " +
            "from Assessments " +
            "group by userid " +
            " ) " +
            "as x inner join Assessments as f on f.userid = x.userid and f.datelocal = x.local and (f.status is null or f.status = '') " +
            "left join users u on f.userid = u.id " +
            "left join aspnetusers a on f.provider = a.id " +
            "left join AssessmentsAnswers an on f.idform = an.idform " +
            "left join cities ci on f.cityId = ci.id " +
            "left join state st on ci.StateId = st.id " +
            "left join country co on st.CountryId = co.id " +
            "order by f.conversiontotal ";


            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlDataReader reader = await command1.ExecuteReaderAsync();


            while (await reader.ReadAsync())
            {
                DashBoardTopBottomAssessments assessment = new DashBoardTopBottomAssessments();
                assessment.Score = reader.GetInt32(0);
                if (reader.IsDBNull(1))
                {
                    assessment.Assessor = "";
                }
                else
                {
                    assessment.Assessor = reader.GetString(1);
                }
                assessment.Age = reader.GetInt32(2);

                assessment.Health = reader.GetInt32(3);
                assessment.Lifestyle = reader.GetInt32(4);
                assessment.Biodata = reader.GetInt32(5);
                assessment.Mobility = reader.GetInt32(6);
                assessment.Fitness = reader.GetInt32(7);

                assessment.idForm = reader.GetString(8);
                assessment.userid = reader.GetString(9);

                questions.Add(assessment);

            }

            reader.Close();

        }

        [Route("QueryOneUserQuestions")]
        public async Task<HttpResponseMessage> QueryOneUserQuestions(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            String idform = varSearchModel.parameters[0].Trim();

            QueryUserQuestionsModel question = new QueryUserQuestionsModel();

            try
            {

                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {

                    await connection1.OpenAsync();

                    string strcommand = "SELECT f.idform, f.email, u.firstname, u.lastname, f.datelocal " +
                                        "FROM form f " +
                                        "left join users u on f.email = u.email " +
                                        "where f.idform = @idform ";
                
                    SqlCommand command1 = new SqlCommand(strcommand, connection1);

                    SqlParameter parameter = new SqlParameter("@idform", SqlDbType.VarChar);
                    parameter.Value = idform;
                    command1.Parameters.Add(parameter);
                    
                    SqlDataReader reader = await command1.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        question.id = reader.GetString(0);
                        question.email = reader.GetString(1);
                        question.firstName = reader.GetString(2);
                        question.lastName = reader.GetString(3);
                        question.datelocal = reader.GetDateTime(4);
                    }
                    reader.Close();

                }

            }
            catch (ApplicationException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
            }
            catch (Exception ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);

            }

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, question);

        }

    }


}

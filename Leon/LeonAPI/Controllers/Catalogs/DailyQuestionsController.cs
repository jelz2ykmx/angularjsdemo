using LeonModels;
using LeonModels.Capture;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Transactions;
using System.Web.Http;

namespace LeonAPI.Controllers.Catalogs
{
    [Authorize]
    [RoutePrefix("api/QuestionsDaily")]
    public class DailyQuestionsController : ApiController
    {
        CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        [Route("QueryOneUserDailyQuestions")]
        public async Task<HttpResponseMessage> QueryOneUserDailyQuestions(SearchModel varSearchModel)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            string userid = varSearchModel.parameters[0].Trim();
            string datelocal = varSearchModel.parameters[1].Trim();

            DateTime datelocalParse = Convert.ToDateTime(datelocal);

            QueryUserDailyQuestionsModel dailyQuestion = new QueryUserDailyQuestionsModel();

            try
            {
                using (SqlConnection connection1 = new SqlConnection(connetionString))
                {
                    await connection1.OpenAsync();

                    SqlCommand command1 = new SqlCommand("SELECT " +
                                  "d.userid, d.datelocal, d.sleeping, d.moodlike, d.sore, d.nutrition  " +
                                  "from DailyQuestions d " +
                                  "where d.userid = @userid and d.datelocal = @datelocal", connection1);

                    SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
                    parameter.Value = userid;
                    command1.Parameters.Add(parameter);

                    parameter = new SqlParameter("@datelocal", SqlDbType.Date);
                    parameter.Value = datelocalParse.Date;
                    command1.Parameters.Add(parameter);

                    SqlDataReader reader = await command1.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        dailyQuestion.userid = reader.GetString(0);
                        dailyQuestion.datelocal = reader.GetDateTime(1);
                        dailyQuestion.sleeping = reader.GetInt32(2);
                        dailyQuestion.moodlike = reader.GetInt32(3);
                        dailyQuestion.sore = reader.GetInt32(4);
                        dailyQuestion.nutrition = reader.GetInt32(5);
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

            return Request.CreateResponse(System.Net.HttpStatusCode.OK, dailyQuestion);
        }

        [Route("AddUpdate")]
        public async Task<HttpResponseMessage> AddUpdate (QueryUserDailyQuestionsModel model)
        {
            Thread.CurrentThread.CurrentCulture = culture;

            try
            {
                model.datelocal = DateTime.Parse(model.datelocalN);

                using (TransactionScope scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                    using (SqlConnection connection1 = new SqlConnection(connetionString))
                    {
                        await connection1.OpenAsync();

                        string commandText1 = "";

                        if (model.transactionType == 1)
                        {
                            commandText1 = "INSERT INTO DailyQuestions " +
                                  "(userid, datelocal, dateserver, sleeping, moodlike, sore, nutrition) " +
                                  "values (@userid, @datelocal, getdate(), @sleeping, @moodlike, @sore, @nutrition )";
                        } 
                        else if(model.transactionType == 2)
                        {
                            commandText1 = "UPDATE DailyQuestions SET sleeping = @sleeping, moodlike = @moodlike, sore = @sore, nutrition = @nutrition " +
                                  "WHERE userid = @userid AND datelocal = @datelocal";
                        }

                        SqlCommand command1 = new SqlCommand(commandText1, connection1);

                        SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
                        parameter.Value = model.userid;
                        command1.Parameters.Add(parameter);

                        parameter = new SqlParameter("@datelocal", SqlDbType.Date);
                        parameter.Value = model.datelocal;
                        command1.Parameters.Add(parameter);

                        parameter = new SqlParameter("@sleeping", SqlDbType.Int);
                        parameter.Value = model.sleeping;
                        command1.Parameters.Add(parameter);

                        parameter = new SqlParameter("@moodlike", SqlDbType.Int);
                        parameter.Value = model.moodlike;
                        command1.Parameters.Add(parameter);

                        parameter = new SqlParameter("@sore", SqlDbType.Int);
                        parameter.Value = model.sore;
                        command1.Parameters.Add(parameter);

                        parameter = new SqlParameter("@nutrition", SqlDbType.Int);
                        parameter.Value = model.nutrition;
                        command1.Parameters.Add(parameter);

                        await command1.ExecuteNonQueryAsync();
                    }
                    scope.Complete();
                }
            }
            catch (TransactionAbortedException ex)
            {
                ErrorModel _errors = new ErrorModel();
                _errors.message = ex.Message;
                return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, _errors);
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
            return Request.CreateResponse(System.Net.HttpStatusCode.OK);
        }
    }
}

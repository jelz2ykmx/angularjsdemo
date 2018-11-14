using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WValidicImport
{
    public partial class Export : Form
    {
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        Dictionary<string,string> users = new Dictionary<string,string>();
        Dictionary<string, string> activities = new Dictionary<string, string>();
        Dictionary<string, string> sources = new Dictionary<string, string>();
        List<string> data = new List<string>();

        bool userdata = true;
        string username = "";

        public Export()
        {
            InitializeComponent();
        }

        private async void button1_Click(object sender, EventArgs e)
        {
            button1.Enabled = false;

            try
            {
                await GetUsersIds();
                await GetActivties();
                await GetSources();
                await GetData();
                SaveData();

                MessageBox.Show("Done!");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }

            this.Close();
        }

        async Task GetUsersIds()
        {

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                String strcommand = "SELECT validicid, email FROM users where validic = 1";
               
                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = await command1.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    users.Add(reader.GetString(0), reader.GetString(1));
                }
                reader.Close();

            }

        }

        async Task GetActivties()
        {

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                String strcommand = "SELECT id, name FROM ValidicActivityCategory";

                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = await command1.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    activities.Add(reader.GetString(0), reader.GetString(1));
                }
                reader.Close();

            }

        }

        async Task GetSources()
        {

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                String strcommand = "SELECT id, source FROM ValidicSources";

                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = await command1.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    sources.Add(reader.GetString(0), reader.GetString(1));
                }
                reader.Close();

            }

        }

        async Task GetData()
        {

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                foreach (KeyValuePair<string,string> user in users)
                {
                    username = user.Value;
                    userdata = true;
                    await GetFitness(connection1, user.Key);
                    await GetRoutine(connection1, user.Key);
                    await GetNutrition(connection1, user.Key);
                    await GetSleep(connection1, user.Key);
                    await GetWeight(connection1, user.Key);
                    await GetDiabetes(connection1, user.Key);
                    await GetBiometrics(connection1, user.Key);
                    data.Add("");
                }
            }

        }

        async Task GetFitness(SqlConnection connection1, string userid)
        {

         
            String strcommand = "SELECT id,activitycategory,calories,distance,duration,intensity,lastupdated,source,starttime,timestamp,type,utcoffset,validated " +
                                "FROM ValidicFitness where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {
                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("Fitness");
                    data.Add("");
                    data.Add("id,activitycategory,calories,distance,duration,intensity,lastupdated,source,starttime,timestamp,type,utcoffset,validated");

                    flag = false;
                }

                string cadena = reader.GetString(0) + ",";
                cadena += activities[reader.GetString(1)] + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDecimal(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetString(5) + ",";
                cadena += reader.GetDateTime(6).ToString() + ",";
                cadena += sources[reader.GetString(7)] + ",";
                cadena += reader.GetDateTime(8).ToString() + ",";
                cadena += reader.GetDateTime(9).ToString() + ",";
                cadena += reader.GetString(10) + ",";
                cadena += reader.GetString(11) + ",";
                cadena += reader.GetBoolean(12).ToString();
                data.Add(cadena);
            }
            reader.Close();

          

        }

        async Task GetRoutine(SqlConnection connection1, string userid)
        {
            
           
            String strcommand = "SELECT id,caloriesburned,distance,elevation,floors,lastupdated,source,steps,timestamp,utcoffset,validated,water " +
                                "FROM ValidicRoutine where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {
                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("");
                    data.Add("Routine");
                    data.Add("");
                    data.Add("id,caloriesburned,distance,elevation,floors,lastupdated,source,steps,timestamp,utcoffset,validated,water");

                    flag = false;
                }
                string cadena = reader.GetString(0) + ",";
                cadena += reader.GetDecimal(1).ToString() + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDecimal(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetDateTime(5).ToString() + ",";
                cadena += sources[reader.GetString(6)] + ",";
                cadena += reader.GetDecimal(7).ToString() + ",";
                cadena += reader.GetDateTime(8).ToString() + ",";
                cadena += reader.GetString(9) + ",";
                cadena += reader.GetBoolean(10).ToString() + ",";
                cadena += reader.GetDecimal(11).ToString();
                data.Add(cadena);
            }
            reader.Close();



        }

        async Task GetNutrition(SqlConnection connection1, string userid)
        {
          
            String strcommand = "SELECT id,calories,carbohydrates,fat,fiber,lastupdated,meal,protein,sodium,source,timestamp,utcoffset,validated,water " +
                                "FROM ValidicNutrition where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {
                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("");
                    data.Add("Nutrition");
                    data.Add("");
                    data.Add("id,calories,carbohydrates,fat,fiber,lastupdated,meal,protein,sodium,source,timestamp,utcoffset,validated,water");

                    flag = false;
                }
                string cadena = reader.GetString(0) + ",";
                cadena += reader.GetDecimal(1).ToString() + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDecimal(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetDateTime(5).ToString() + ",";
                cadena += reader.GetString(6) + ",";
                cadena += reader.GetDecimal(7).ToString() + ",";
                cadena += reader.GetDecimal(8).ToString() + ",";
                cadena += sources[reader.GetString(9)] + ",";
                cadena += reader.GetDateTime(10).ToString() + ",";
                cadena += reader.GetString(11) + ",";
                cadena += reader.GetBoolean(12).ToString() + ",";
                cadena += reader.GetDecimal(13).ToString();
                data.Add(cadena);
            }
            reader.Close();



        }

        async Task GetSleep(SqlConnection connection1, string userid)
        {
           
            String strcommand = "SELECT id,awake,deep,lastupdated,light,rem,source,timeswoken,timestamp,totalsleep,utcoffset,validated " +
                                "FROM ValidicSleep where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {
                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("");
                    data.Add("Sleep");
                    data.Add("");
                    data.Add("id,awake,deep,lastupdated,light,rem,source,timeswoken,timestamp,totalsleep,utcoffset,validated");

                    flag = false;
                }
                string cadena = reader.GetString(0) + ",";
                cadena += reader.GetDecimal(1).ToString() + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDateTime(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetDecimal(5).ToString() + ",";
                cadena += sources[reader.GetString(6)] + ",";
                cadena += reader.GetDecimal(7).ToString() + ",";
                cadena += reader.GetDateTime(8).ToString() + ",";
                cadena += reader.GetDecimal(9).ToString() + ",";
                cadena += reader.GetString(10) + ",";
                cadena += reader.GetBoolean(11).ToString();
                data.Add(cadena);
            }
            reader.Close();



        }

        async Task GetWeight(SqlConnection connection1, string userid)
        {
          
            String strcommand = "SELECT id,bmi,fatpercent,free_mass,height,lastupdated,massweight,source,timestamp,utcoffset,validated,weight " +
                                "FROM ValidicWeight where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {

                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("");
                    data.Add("Weight");
                    data.Add("");
                    data.Add("id,bmi,fatpercent,free_mass,height,lastupdated,massweight,source,timestamp,utcoffset,validated,weight");

                    flag = false;
                }
                string cadena = reader.GetString(0) + ",";
                cadena += reader.GetDecimal(1).ToString() + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDecimal(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetDateTime(5).ToString() + ",";
                cadena += reader.GetDecimal(6).ToString() + ",";
                cadena += sources[reader.GetString(7)] + ",";
                cadena += reader.GetDateTime(8).ToString() + ",";
                cadena += reader.GetString(9) + ",";
                cadena += reader.GetBoolean(10).ToString() + ",";
                cadena += reader.GetDecimal(11).ToString() + ",";
                data.Add(cadena);
            }
            reader.Close();



        }

        async Task GetDiabetes(SqlConnection connection1, string userid)
        {
           
            String strcommand = "SELECT id,bloodglucose,cpeptide,fastingplasmaglucosetest,hba1c,insulin,lastupdated,oralglucosetolerancetest" +
                                ",randomplasmaglucosetest,relationshiptomeal,source,timestamp,triglyceride,utcoffset,validated " +
                                "FROM ValidicDiabetes where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {
                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("");
                    data.Add("Diabetes");
                    data.Add("");
                    data.Add("id,bloodglucose,cpeptide,fastingplasmaglucosetest,hba1c,insulin,lastupdated,oralglucosetolerancetest" +
                    ",randomplasmaglucosetest,relationshiptomeal,source,timestamp,triglyceride,utcoffset,validated");

                    flag = false;
                }
                string cadena = reader.GetString(0) + ",";
                cadena += reader.GetDecimal(1).ToString() + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDecimal(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetDecimal(5).ToString() + ",";
                cadena += reader.GetDateTime(6).ToString() + ",";
                cadena += reader.GetDecimal(7).ToString() + ",";
                cadena += reader.GetDecimal(8).ToString() + ",";
                cadena += reader.GetString(9) + ",";
                cadena += sources[reader.GetString(10)] + ",";
                cadena += reader.GetDateTime(11).ToString() + ",";
                cadena += reader.GetDecimal(12).ToString() + ",";
                cadena += reader.GetString(13) + ",";
                cadena += reader.GetBoolean(14).ToString();
                data.Add(cadena);
            }
            reader.Close();



        }

        async Task GetBiometrics(SqlConnection connection1, string userid)
        {
            String strcommand = "SELECT id,bloodcalcium,bloodchromium,bloodfolicacid,bloodmagnesium,bloodpotassium,bloodsodium,bloodvitamin_b12,bloodzinc" +
                                ",creatinekinase,crp,diastolic,ferritin,hdl,hscrp,il6,lastupdated,ldl,restingheartrate,source,spo2,systolic" +
                                ",temperature,testosterone,timestamp,totalcholesterol,tsh,uricacid,utcoffset,validated,vitamind,whitecellcount " +
                                "FROM ValidicBiometrics where userid = @userid";

            SqlCommand command1 = new SqlCommand(strcommand, connection1);

            SqlParameter parameter = new SqlParameter("@userid", SqlDbType.VarChar);
            parameter.Value = userid;
            command1.Parameters.Add(parameter);

            SqlDataReader reader = await command1.ExecuteReaderAsync();

            bool flag = true;
            while (await reader.ReadAsync())
            {
                if (flag)
                {
                    if (userdata)
                    {
                        data.Add(username);
                        data.Add("");
                        userdata = false;
                    }

                    data.Add("");
                    data.Add("Biometrics");
                    data.Add("");
                    data.Add("id,bloodcalcium,bloodchromium,bloodfolicacid,bloodmagnesium,bloodpotassium,bloodsodium,bloodvitamin_b12,bloodzinc" +
                    ",creatinekinase,crp,diastolic,ferritin,hdl,hscrp,il6,lastupdated,ldl,restingheartrate,source,spo2,systolic" +
                    ",temperature,testosterone,timestamp,totalcholesterol,tsh,uricacid,utcoffset,validated,vitamind,whitecellcount");


                    flag = false;
                }
                string cadena = reader.GetString(0) + ",";
                cadena += reader.GetDecimal(1).ToString() + ",";
                cadena += reader.GetDecimal(2).ToString() + ",";
                cadena += reader.GetDecimal(3).ToString() + ",";
                cadena += reader.GetDecimal(4).ToString() + ",";
                cadena += reader.GetDecimal(5).ToString() + ",";
                cadena += reader.GetDecimal(6).ToString() + ",";
                cadena += reader.GetDecimal(7).ToString() + ",";
                cadena += reader.GetDecimal(8).ToString() + ",";
                cadena += reader.GetDecimal(9).ToString() + ",";
                cadena += reader.GetDecimal(10).ToString() + ",";
                cadena += reader.GetDecimal(11).ToString() + ",";
                cadena += reader.GetDecimal(12).ToString() + ",";
                cadena += reader.GetDecimal(13).ToString() + ",";
                cadena += reader.GetDecimal(14).ToString() + ",";
                cadena += reader.GetDecimal(15).ToString() + ",";
                cadena += reader.GetDateTime(16).ToString() + ",";
                cadena += reader.GetDecimal(17).ToString() + ",";
                cadena += reader.GetDecimal(18).ToString() + ",";
                cadena += sources[reader.GetString(19)] + ",";
                cadena += reader.GetDecimal(20).ToString() + ",";
                cadena += reader.GetDecimal(21).ToString() + ",";
                cadena += reader.GetDecimal(22).ToString() + ",";
                cadena += reader.GetDecimal(23).ToString() + ",";
                cadena += reader.GetDateTime(24).ToString() + ",";
                cadena += reader.GetDecimal(25).ToString() + ",";
                cadena += reader.GetDecimal(26).ToString() + ",";
                cadena += reader.GetDecimal(27).ToString() + ",";
                cadena += reader.GetString(28) + ",";
                cadena += reader.GetBoolean(29).ToString() + "";
                cadena += reader.GetDecimal(30).ToString() + ",";
                cadena += reader.GetDecimal(31).ToString();

                data.Add(cadena);
            }
            reader.Close();



        }

        private void SaveData()
        {
            SaveFileDialog saveFileDialog1 = new SaveFileDialog();

            saveFileDialog1.Filter = "csv files (*.csv)|*.csv";
            saveFileDialog1.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            saveFileDialog1.RestoreDirectory = true;

            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                System.IO.File.WriteAllLines(saveFileDialog1.FileName, data);
            }

        }

    }
}

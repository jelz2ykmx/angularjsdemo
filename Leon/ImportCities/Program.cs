using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImportCities
{
    class Program
    {
        static List<City> cities = new List<City>();
        static Dictionary<string, int> states = new Dictionary<string, int>();
        static List<string> statemissing = new List<string>();

        static void Main(string[] args)
        {

            FillData();
            SQLFill();
        }

        private static void FillData()
        {

            var path = new Uri(System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().CodeBase)).LocalPath;
            path += @"\USZip.csv";
            string[] lines = System.IO.File.ReadAllLines(path);

            for (int x = 1; x < lines.Length; x++)
            {
                var line = lines[x].Replace("\"", string.Empty).Split(',');
                City city = new City();
                city.zipCode = line[0];
                city.city = line[2];
                city.state = line[3];
                if (line[5] != "")
                    city.lat = Convert.ToDouble(line[5]);
                if (line[6] != "")
                    city.longitud = Convert.ToDouble(line[6]);

                cities.Add(city);
            }


        }

        private static void SQLFill()
        {
            CultureInfo culture = CultureInfo.GetCultureInfo("en-US");
            String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {

                connection1.Open();

                string strcommand = "SELECT id,ShortName " +
                               "FROM state " +
                               "order by ShortName";


                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = command1.ExecuteReader();


                while (reader.Read())
                {
                    states.Add(reader.GetString(1), reader.GetInt32(0));
                }
            
                reader.Close();

                foreach (var city in cities)
                {
                    string strcommand2 = "INSERT Cities " +
                                        "(City,StateId,ZipCode,Lat,Longitud) " +
                                        "VALUES " +
                                        "('" + city.city + "'" +
                                        ",'" + states[city.state] +  "'" +
                                        ",'" + city.zipCode + "'" +
                                        "," + city.lat +
                                        "," + city.longitud + ")";
                    

                    SqlCommand command2 = new SqlCommand(strcommand2, connection1);

                    command2.ExecuteNonQuery();

                }




            }

           

        }

    }
}

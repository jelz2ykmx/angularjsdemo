using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace LeonReminderDailyQuestionary
{
    class Reminder
    {
        String connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        String _semail = ConfigurationManager.AppSettings["email"];
        string _password = ConfigurationManager.AppSettings["password"];
        string _server = ConfigurationManager.AppSettings["server"];
        int _port = Convert.ToInt32(ConfigurationManager.AppSettings["port"]);
        String web = ConfigurationManager.AppSettings["web"];
        String ios = ConfigurationManager.AppSettings["ios"];

        public async Task Start()
        {
            await GetUsers();
        }


        async Task GetUsers()
        {
            SmtpClient SmtpServer = new SmtpClient(_server);
            SmtpServer.UseDefaultCredentials = false;
            SmtpServer.Credentials = new System.Net.NetworkCredential(_semail, _password);

            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(_semail);
            SmtpServer.Port = _port;
            SmtpServer.EnableSsl = true;
            mail.Body = LoadTemplate();
            mail.IsBodyHtml = true;
            mail.Subject = "Go Leon";

            using (SqlConnection connection1 = new SqlConnection(connetionString))
            {
                await connection1.OpenAsync();

                String strcommand = "SELECT u.email from AspNetUsers u " +
                                    "left join AspNetUserRoles r on u.id = r.UserId " +
                                    "left join users lu on u.id = lu.id " +
                                    "where lu.dailyplan = 1 and r.RoleId = '0b6900eb-5e16-4de4-a085-a3dfeb199987'";

                SqlCommand command1 = new SqlCommand(strcommand, connection1);

                SqlDataReader reader = await command1.ExecuteReaderAsync();

               
                while (reader.Read())
                {
                    MailAddress bcc = new MailAddress(reader.GetString(0));
                    //if (reader.GetString(0) == "jelz14yk@gmail.com")
                        mail.Bcc.Add(bcc);
                }
                reader.Close();
            }

     
            await SmtpServer.SendMailAsync(mail);

        }
        
        private string LoadTemplate()
        {
           
            ios += "/magiclink.html?dialyquestions&001";

            web += "/?dialyquestions" ;

            string message = "<p class=MsoNormal style='margin-top:5.0pt;margin-right:18.0pt;margin-bottom:" +
                              "5.0pt;margin-left:18.0pt;line-height:normal;mso-layout-grid-align:none;" +
                              "text-autospace:none'><span lang=EN-US style='font-size:12.0pt;font-family:'Times New Roman',serif;" +
                              "mso-ansi-language:EN-US'>Remember to fill out your questionary." +
                              " " +
                              "<br>" +
                              "<br>" +
                              "Click on WEB link that'll take you to that questionary." +
                              "<br>" +
                              "<br>" +
                              "<a href='" + web + "'>" + web + "</a>" +
                              "<br>" +
                              "<br>" +
                              "Click on IOS link that'll take you to that questionary." +
                              "<br>" +
                              "<br>" +
                              "<a href='" + ios + "'>" + ios + "</a>" +
                              "<br>" +
                              "<br>" +
                              "Please feel free to contact me directly with questions or feedback. </span><span" +
                              "style = 'font-size:12.0pt;font-family:'Times New Roman',serif' > We value your " +
                              "input. <br>" +
                              "<br>" +
                              "Sincerely,<br>" +
                              "Coach<o:p></o:p></span></p>";

            return message;

        }
    }
}

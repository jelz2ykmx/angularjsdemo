using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeonModels.Catalogs
{
    public class RecoveryModel
    {
        public string newPassword { get; set; }
        public string newPasswordConfirm { get; set; }
        public string recoverCode { get; set; }

    }
}

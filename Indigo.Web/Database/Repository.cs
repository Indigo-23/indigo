using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Indigo.Web.Database
{
    public class Repository
    {
        public static Repository Current
        {
            get
            {
                if (HttpContext.Current.Items["Repository"] == null)
                {
                    HttpContext.Current.Items["Repository"] = new AuthRepository();
                }
                return HttpContext.Current.Items["Repository"] as Repository;
            }
        }

        private static AuthRepository _Auth = null;
        public static AuthRepository Auth
        {
            get
            {
                if (_Auth == null)
                    _Auth = new AuthRepository();
                return _Auth;
            }
        }

    }
}

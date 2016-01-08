using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Indigo.Web.Database
{
    public class AuthRepository : IDisposable
    {
        private AuthContext _AuthContext = null;
        public AuthContext AuthContext
        {
            get
            {
                if (_AuthContext == null)
                    _AuthContext = new AuthContext();
                return _AuthContext;
            }
        }

        private UserManager<IdentityUser> _UserManager = null;
        public UserManager<IdentityUser> UserManager
        {
            get
            {
                if (_UserManager == null)
                    _UserManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(this.AuthContext));
                return _UserManager;
            }
        }

        public void Dispose()
        {
            this.AuthContext.Dispose();
            this.UserManager.Dispose();
        }

    }
}

using Indigo.Web.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

[assembly: OwinStartup(typeof(Indigo.Web.Bootstrap.Startup))]
namespace Indigo.Web.Bootstrap
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            OAuthConfig.ConfigureAuth(app);

            WebApiConfig.Register(config);
            app.UseWebApi(config);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VpassSales.Repo;
using System.Web.Http.Cors;



namespace VpassSales.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UserController : ApiController
    {
        public readonly IUser dist;
        public UserController()
        {
        }
        public UserController(IUser Disti)
        {
            this.dist = Disti;
        }
        


        [Route("api/User/UserLogin/{Username}/{Password}")]
        [HttpGet]
        public IHttpActionResult Get(string Username, string Password)
        {
            var sal =dist.Get(Username, Password);
            if(sal != null)
            {
              return Ok(sal);
            }   
            return NotFound();
        }

        [Route("api/UserController/GetProducts")]
        [HttpGet]
        public IHttpActionResult GetProducts()
        {
            var sal = dist.GetProducts();
            if(sal != null)
            {
                return Ok(sal);
            }
            return NotFound();
        }
        
    }
}

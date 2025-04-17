using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Seido.Utilities.SeedGenerator;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;

using Models.DTO;
using Models;
using Services;
using Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class csAdminController : Controller
    {
        loginUserSessionDto _usr = null;

        private ISightsService _aservice = null;
        ILoginService _loginService = null;

        private ILogger<csAdminController> _logger = null;



   //GET: api/csAdmin/log
         [HttpGet()]
         [ActionName("Log")]
         [ProducesResponseType(200, Type = typeof(IEnumerable<csLogMessage>))]
         public async Task<IActionResult> Log([FromServices] ILoggerProvider _loggerProvider)
         {
             //Note the way to get the LoggerProvider, not the logger from Services via DI
             if (_loggerProvider is csInMemoryLoggerProvider cl)
             {

              /*    usrInfoDto _info = await _loginService.SeedAsync(_countUsr, _countSupUsr);
                return Ok(_info); */
                 return Ok(await cl.MessagesAsync);
             }
             return Ok("No messages in log");
         } 

        //GET: api/admin/seed?count={count}
        [HttpGet()]
        [ActionName("Seed")]
        [ProducesResponseType(200, Type = typeof(adminInfoDbDto))]
        [ProducesResponseType(400, Type = typeof(string))]
        public async Task<IActionResult> Seed(string count)
        {
            try
            {
                int _count = int.Parse(count);

                adminInfoDbDto _info = await _aservice.SeedAsync(_usr, _count);

                return Ok(_info);


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //GET: api/admin/removeseed
        [HttpGet()]
        [ActionName("RemoveSeed")]
        [ProducesResponseType(200, Type = typeof(adminInfoDbDto))]
        [ProducesResponseType(400, Type = typeof(string))]
        public async Task<IActionResult> RemoveSeed(string seeded = "true")
        {
            try
            {
                bool _seeded = bool.Parse(seeded);

                adminInfoDbDto _info = await _aservice.RemoveSeedAsync(_usr, _seeded);


                return Ok(_info);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //GET: api/admin/seeduser?users={count}&superusers={count}
        [HttpGet()]
        [ActionName("SeedUsers")]
        [ProducesResponseType(200, Type = typeof(usrInfoDto))]
        [ProducesResponseType(400, Type = typeof(string))]
        public async Task<IActionResult> SeedUsers(string countUsr = "32", string countSupUsr = "2")
        {
            try
            {
                int _countUsr = int.Parse(countUsr);
                int _countSupUsr = int.Parse(countSupUsr);

                return BadRequest("Not implemented");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
        }




        #region constructors
        public csAdminController(ISightsService aservice, ILogger<csAdminController> logger)
        {
            //_service = service;
            _aservice = aservice;
            _logger = logger;
        }

        #endregion
    }
}



using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Seido.Utilities.SeedGenerator;

using Models;
using Services;
using Configuration;
using Models.DTO;

using Services;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Security.Cryptography;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class csSightsController : Controller
    {
        ILogger<csSightsController> _logger = null;
        ISightsService _aservice = null;
        loginUserSessionDto _usr = null;

        #region starting ti implement CRUD

        #region RD
        [HttpGet()]
        [ActionName("Read")]
        [ProducesResponseType(200, Type = typeof(csRespPageDTO<ISight>))]
        [ProducesResponseType(400, Type = typeof(string))]
        public async Task<IActionResult> Read(string seeded = "true", string flat = "true",
               string filter = null, string pageNr = "0", string pageSize = "10")
        {
            try
            {
                bool _seeded = bool.Parse(seeded);
                bool _flat = bool.Parse(flat);
                int _pageNr = int.Parse(pageNr);
                int _pageSize = int.Parse(pageSize);

                var _resp = await _aservice.ReadSightsAsync(_usr, _seeded, _flat, filter?.Trim()?.ToLower(), _pageNr, _pageSize);
                return Ok(_resp);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //DELETE: api/friends/deleteitem/id
        [HttpDelete("{id}")]
        [ActionName("DeleteItem")]
        [ProducesResponseType(200, Type = typeof(string))]
        [ProducesResponseType(400, Type = typeof(string))]
        public async Task<IActionResult> DeleteItem(string id)
        {
            try
            {
                var _id = Guid.Parse(id);
               var item = await _aservice.DeleteSightAsync(_usr, _id);
               if(item == null) {return BadRequest($"Item with {id} does not exist");}

               _logger.LogInformation($"Item {_id} deleted!");

               return Ok (item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //GET: api/friends/readitem
        [HttpGet()]
        [ActionName("ReadItem")]
        [ProducesResponseType(200, Type = typeof(ISight))]
        [ProducesResponseType(400, Type = typeof(string))]
        [ProducesResponseType(404, Type = typeof(string))]
        public async Task<IActionResult> ReadItem(string id = null, string flat = "false")
        {
            try
            {
                var _id = Guid.Parse(id);
                bool _flat = bool.Parse(flat);

               var item = await _aservice.ReadSightAsync(_usr, _id, _flat);

               if(item == null) {return BadRequest($"Item with {id} does not exist");}

               return Ok(item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        #region  REad ITEMdto

        //GET: api/friends/readitemdto
        [HttpGet()]
        [ActionName("ReadItemDto")]
        [ProducesResponseType(200, Type = typeof(csSightCUdto))]
        [ProducesResponseType(400, Type = typeof(string))]
        [ProducesResponseType(404, Type = typeof(string))]
        public async Task<IActionResult> ReadItemDto(string id = null)
        {
            try
            {
                var _id = Guid.Parse(id);
                var item = await _aservice.ReadSightAsync(_usr, _id, false); //CREATE READ SIGHTS aSYNC

                if (item == null)
                {
                    return BadRequest($" Item with id {id} does not exist");
                }

                var dto = new csSightCUdto(item);
                return Ok(dto);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        #endregion


        #endregion



        #region CU 

        

 //PUT: api/friends/updateitem/id
//Body: csFriendCUdto in Json
[HttpPut("{id}")]
[ActionName("UpdateItem")]
[ProducesResponseType(200, Type = typeof(csSightCUdto))]
[ProducesResponseType(400, Type = typeof(string))]
public async Task<IActionResult> UpdateItem(string id, [FromBody] csSightCUdto item)
{
    try
    {
        var _id = Guid.Parse(id);

        if(item.SightId != _id)
            throw new Exception ("id mismatch");

            var _item = await _aservice.UpdateSightAsync(_usr, item);
            _logger.LogInformation($"Item {_id} updated");

            return Ok(_item);

        
    }
    catch (Exception ex)
    {
        return BadRequest($"Could not update. Error {ex.Message}");
    }
}

//POST: api/friends/createitem
//Body: csFriendCUdto in Json
[HttpPost()]
[ActionName("CreateItem")]
[ProducesResponseType(200, Type = typeof(csSightCUdto))]
[ProducesResponseType(400, Type = typeof(string))]
public async Task<IActionResult> CreateItem([FromBody] csSightCUdto item)
{
    try
    {
          var _item = await _aservice.CreateSightAsync(_usr, item);
                _logger.LogInformation($"item {_item.SightId} created");

                return Ok(_item);  
    }
    catch (Exception ex)
    {
        return BadRequest($"Could not create. Error {ex.Message}");
    }
}

public override void OnActionExecuting(ActionExecutingContext context)
{
    base.OnActionExecuting(context);
} 

        #endregion

        #endregion

  


        public csSightsController(ISightsService aservice, ILogger<csSightsController> logger)
        {
            _aservice = aservice;
            _logger = logger;
        }



    }
}

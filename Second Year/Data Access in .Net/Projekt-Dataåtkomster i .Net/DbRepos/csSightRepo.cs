using Configuration;
using Models;
using DbModels;
using DbContext;
using Seido.Utilities.SeedGenerator;
using Microsoft.EntityFrameworkCore;
using Configuration;
using Models.DTO;

using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Reflection.Metadata;

namespace DbRepos;

public class csSightRepo : ISightRepo
{
    private const string seedSource = "./friends-seeds1.json";

    private ILogger<csSightRepo> _logger = null;

    #region used before csLoginService is implemented
    private string _dblogin = "sysadmin";
    //private string _dblogin = "gstusr";
    //private string _dblogin = "usr";
    //private string _dblogin = "supusr";
    #endregion


    #region my old sights method
    public List<csSightDbM> Sights(int _count)
    {
        using (var db = csMainDbContext.DbContext("sysadmin"))
        {
            List<csSightDbM> sights = db.Sights.Include(a => a.CommentDbM).Take(_count).ToList();
            return sights;
        }
    }

    #endregion

    #region Old my old seeding method

    public void Seed(int _count)
    {
        var fn = Path.GetFullPath(seedSource);
        var _seeder = new csSeedGenerator(fn);
        using (var db = csMainDbContext.DbContext("sysadmin"))
        {
            var comments = _seeder.ItemsToList<csCommentsDbM>(50);
            var sights = _seeder.ItemsToList<csSightDbM>(_count);

            foreach (var s in sights)
            {
                s.CommentDbM = _seeder.UniqueIndexPickedFromList(5, comments);
            }


            db.Sights.AddRange(sights);

            db.SaveChanges();

        }
    }

    #endregion


    #region Admin repo methods


    #region Martins SeedAsync method

    public async Task<adminInfoDbDto> SeedAsync(loginUserSessionDto usr, int nrOfItems)
    {

        var fn = Path.GetFullPath(seedSource);
        var _seeder = new csSeedGenerator(fn);

        using (var db = csMainDbContext.DbContext(_dblogin))
        {
            await RemoveSeedAsync(usr, true);




            // var _comments = _seeder.ItemsToList<csCommentsDbM>(nrOfItems);
            // db.Comments.AddRange(_comments);

            //await db.SaveChangesAsync();

            var _seededComments = await db.Comments.ToListAsync();


            //Generate Sights, Country and city

            var _sights = _seeder.ItemsToList<csSightDbM>(nrOfItems);

            //var _existingCountry = await db.Country.ToListAsync();
            var _country = _seeder.UniqueItemsToList<csCountryDbM>(10);
            var _city = _seeder.ItemsToList<csCityDbM>(100);

            var _users = _seeder.ItemsToList<csUserDbM>(50);






            foreach (var sight in _sights)
            {
                sight.CountryDbM = (_seeder.Bool) ? _seeder.FromList(_country) : null;
                var _comments = _seeder.ItemsToList<csCommentsDbM>(_seeder.Next(0, 5));
                sight.CitiesDbM = _seeder.ItemsToList<csCityDbM>(3);

                foreach (var comment in _comments)
                {
                    comment.UserDbM = _seeder.FromList(_users);
                }

                sight.CommentDbM = _comments;


            }

            // db.Comments.AddRange(test);
            db.Sights.AddRange(_sights);



            var _info = new adminInfoDbDto();


            #region  full Seed

            int nrSeededComments = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCommentsDbM) && entry.State == EntityState.Added);
            _info.nrSeededComments = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCommentsDbM) && entry.State == EntityState.Added);
            _info.nrSeededCountries = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCountryDbM) && entry.State == EntityState.Added);
            _info.nrSeededCities = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCityDbM) && entry.State == EntityState.Added);
            _info.nrSeededSights = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csSightDbM) && entry.State == EntityState.Added);
            _info.nrSeededUsers = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCityDbM) && entry.State == EntityState.Added);



            #endregion


            _info.nrSeededComments = nrSeededComments;

            #region full seed

            await db.SaveChangesAsync();

            #endregion


            return _info;
        }
    }

    #endregion

    public async Task<adminInfoDbDto> RemoveSeedAsync(loginUserSessionDto usr, bool seeded)
    {
        using (var db = csMainDbContext.DbContext(_dblogin))
        {

            db.Sights.RemoveRange(db.Sights.Where(a => a.Seeded == seeded));
            db.Comments.RemoveRange(db.Comments.Where(c => c.Seeded == seeded));
            db.Country.RemoveRange(db.Country.Where(c => c.Seeded == seeded));
            db.City.RemoveRange(db.City.Where(a => a.Seeded == seeded));
            db.User.RemoveRange(db.User.Where(a => a.Seeded == seeded));


            int nrUnSeededComments = db.ChangeTracker.Entries().Count(
            entry => (entry.Entity is csCommentsDbM) && entry.State == EntityState.Deleted);


            var _info = new adminInfoDbDto();
            _info.nrUnseededComments = nrUnSeededComments;

            _info.nrUnseededComments = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCommentsDbM) && entry.State == EntityState.Deleted);
            _info.nrUnseededCountries = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCountryDbM) && entry.State == EntityState.Deleted);
            _info.nrUnseededCities = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csCityDbM) && entry.State == EntityState.Deleted);
            _info.nrUnseededSights = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csSightDbM) && entry.State == EntityState.Deleted);
            _info.nrUnseededUsers = db.ChangeTracker.Entries().Count(entry => (entry.Entity is csSightDbM) && entry.State == EntityState.Deleted);


            await db.SaveChangesAsync();

            return _info;
        }
    }

    #endregion

    #region Sights repo methods
    public async Task<ISight> ReadSightAsync(loginUserSessionDto usr, Guid id, bool flat)
    {
        using (var db = csMainDbContext.DbContext(_dblogin))
        {

            if (!flat)
            {
                var _query = db.Sights.AsNoTracking()
                     .Include(s => s.CommentDbM)
                     .Include(s => s.CountryDbM)
                     .Include(s => s.CitiesDbM)
                     .Where(s => s.SightId == id);

                return await _query.FirstOrDefaultAsync<ISight>();
            }

            else
            {
                var _query = db.Sights.AsNoTracking()
                .Where(i => i.SightId == id);

                return await _query.FirstOrDefaultAsync<ISight>();

            }

            /* var _ret = new csRespPageDTO<ISight>()
            {
             PageItems = await _query.ToListAsync<ISight>()
            };
            return _ret; */



        }
    }

    public async Task<csRespPageDTO<ISight>> ReadSightsAsync(loginUserSessionDto usr, bool seeded, bool flat, string filter, int pageNumber, int pageSize)
    {
        using (var db = csMainDbContext.DbContext(_dblogin))
        {
            filter ??= "";
            IQueryable<csSightDbM> _query;
            if (flat)
            {
                _query = db.Sights.AsNoTracking();
            }
            else
            {
                _query = db.Sights.AsNoTracking()
                    .Include(i => i.CountryDbM)
                    .Include(i => i.CitiesDbM)
                    .Include(i => i.CommentDbM).Skip(pageSize * pageNumber).Take(pageSize);
            }

            var _ret = new csRespPageDTO<ISight>()
            {
                DbItemsCount = await _query

                //Adding filter functionality
                .Where(i => (i.Seeded == seeded) &&
                            (i.Name.ToLower().Contains(filter))).CountAsync(),

                PageItems = await _query

                //Adding filter functionality
                .Where(i => (i.Seeded == seeded) &&
                            (i.Name.ToLower().Contains(filter)))

                //Adding paging
                .Skip(pageNumber * pageSize)
                .Take(pageSize)

                .ToListAsync<ISight>(),

                PageNr = pageNumber,
                PageSize = pageSize
            };
            return _ret;
        }
    }

    public async Task<ISight> DeleteSightAsync(loginUserSessionDto usr, Guid id)
    {
        using (var db = csMainDbContext.DbContext(_dblogin))
        {
            var _query1 = db.Sights
            .Where(i => i.SightId == id);
            var _item = await _query1.FirstOrDefaultAsync<csSightDbM>();

            if (_item == null) throw new ArgumentException($"Item {id} does not exist");

            db.Sights.Remove(_item);

            await db.SaveChangesAsync();

            return _item;
        }
    }

    public async Task<ISight> UpdateSightAsync(loginUserSessionDto usr, csSightCUdto itemDto)
    {
        using (var db = csMainDbContext.DbContext(_dblogin))
        {
            var _query1 = db.Sights
     .Where(i => i.SightId == itemDto.SightId);
            var _item = await _query1
                .Include(i => i.CountryDbM)
                .Include(i => i.CitiesDbM)
                .Include(i => i.CommentDbM)
                .FirstOrDefaultAsync<csSightDbM>();

            //If the item does not exists
            if (_item == null) throw new ArgumentException($"Item {itemDto.SightId} is not existing");

            //transfer any changes from DTO to database objects
            //Update individual properties
            _item.UpdateFromDTO(itemDto);

            //Update navigation properties
            await navProp_csFriendCUdto_to_csFriendDbM(db, itemDto, _item);

            //write to database model
            db.Sights.Update(_item);

            //write to database in a UoW
            await db.SaveChangesAsync();

            //return the updated item in non-flat mode
            return await ReadSightAsync(usr, _item.SightId, false);
        }
    }

    public async Task<ISight> CreateSightAsync(loginUserSessionDto usr, csSightCUdto itemDto)
    {
        if (itemDto.SightId != null)
            throw new ArgumentException($"{nameof(itemDto.SightId)} must be null when creating a new object");
        using (var db = csMainDbContext.DbContext(_dblogin))
        {
            //transfer any changes from DTO to database objects
            //Update individual properties Friend
            var _item = new csSightDbM(itemDto);

            //Update navigation properties
            await navProp_csFriendCUdto_to_csFriendDbM(db, itemDto, _item);

            //write to database model
            db.Sights.Add(_item);

            //write to database in a UoW
            await db.SaveChangesAsync();

            //return the updated item in non-flat mode
            return await ReadSightAsync(usr, _item.SightId, false);
        }
    }
    #endregion


    private static async Task navProp_csFriendCUdto_to_csFriendDbM(csMainDbContext db, csSightCUdto _itemDtoSrc, csSightDbM _itemDst)
    {
        //update AddressDbM from itemDto.AddressId
        _itemDst.CountryDbM = (_itemDtoSrc.CountryId != null) ? await db.Country.FirstOrDefaultAsync(
            a => (a.CountryId == _itemDtoSrc.CountryId)) : null;

        //update PetsDbM from itemDto.PetsId list
        List<csCityDbM> _cities = null;
        if (_itemDtoSrc.CityId != null)
        {
            _cities = new List<csCityDbM>();
            foreach (var id in _itemDtoSrc.CityId)
            {
                var c = await db.City.FirstOrDefaultAsync(i => i.CityId == id);
                if (c == null)
                    throw new ArgumentException($"Item id {id} not existing");

                _cities.Add(c);
            }
        }
        _itemDst.CitiesDbM = _cities;

        //update QuotesDbM from itemDto.QuotesId
        List<csCommentsDbM> _comments = null;
        if (_itemDtoSrc.CommentsId != null)
        {
            _comments = new List<csCommentsDbM>();
            foreach (var id in _itemDtoSrc.CommentsId)
            {
                var co = await db.Comments.FirstOrDefaultAsync(i => i.CommentId == id);
                if (co == null)
                    throw new ArgumentException($"Item id {id} not existing");

                _comments.Add(co);
            }
        }
        _itemDst.CommentDbM = _comments;
    }

}

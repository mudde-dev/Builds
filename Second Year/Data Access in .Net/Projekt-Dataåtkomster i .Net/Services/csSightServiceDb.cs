using Configuration;
using Models;
using DbRepos;
using Models.DTO;
using Seido.Utilities.SeedGenerator;

namespace Services;


public class csSightServiceDb : ISightsService
{

    private csSightRepo _repo = null;

    public Task<gstusrInfoAllDto> InfoAsync => throw new NotImplementedException();

    public List<ISight> Sights(int _count) => _repo.Sights(_count).ToList<ISight>();

    public void Seed(int _count) => _repo.Seed(_count);


    #region constructors

    public csSightServiceDb(csSightRepo repo)
    {
        _repo = repo;
    }

    #endregion

    #region Simple 1:1 calls in this case, but as Services expands, this will no longer be the case


    public Task<adminInfoDbDto> SeedAsync(loginUserSessionDto usr, int nrOfItems) => _repo.SeedAsync(usr, nrOfItems);
    public Task<adminInfoDbDto> RemoveSeedAsync(loginUserSessionDto usr, bool seeded) => _repo.RemoveSeedAsync(usr, seeded);



        public Task<csRespPageDTO<ISight>> ReadSightsAsync(loginUserSessionDto usr, bool seeded, bool flat, string filter, int pageNumber, int pageSize) => _repo.ReadSightsAsync(usr, seeded, flat, filter, pageNumber, pageSize);
        public Task<ISight> ReadSightAsync(loginUserSessionDto usr, Guid id, bool flat) => _repo.ReadSightAsync(usr, id, flat);
        public Task<ISight> DeleteSightAsync(loginUserSessionDto usr, Guid id) => _repo.DeleteSightAsync(usr, id);
        public Task<ISight> UpdateSightAsync(loginUserSessionDto usr, csSightCUdto item) => _repo.UpdateSightAsync(usr, item);
        public Task<ISight> CreateSightAsync(loginUserSessionDto usr, csSightCUdto item) => _repo.CreateSightAsync(usr, item);



    /*     public Task<csRespPageDTO<ISight>> ReadSightsAsync(loginUserSessionDto usr, bool seeded, bool flat, string filter, int pageNumber, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task<ISight> ReadSightAsync(loginUserSessionDto usr, Guid id, bool flat)
        {
            throw new NotImplementedException();
        } */
    #endregion

}
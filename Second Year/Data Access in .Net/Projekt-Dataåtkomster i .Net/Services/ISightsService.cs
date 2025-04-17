using Models;
using Seido.Utilities.SeedGenerator;

namespace Services;
using Models.DTO;

public interface ISightsService
{
    /*     public List<ISight> Sights(int _count);

        public void Seed(int _count); */

    public Task<gstusrInfoAllDto> InfoAsync { get; }
    public Task<adminInfoDbDto> SeedAsync(loginUserSessionDto usr, int nrOfItems);
    public Task<adminInfoDbDto> RemoveSeedAsync(loginUserSessionDto usr, bool seeded);



        public Task<csRespPageDTO<ISight>> ReadSightsAsync(loginUserSessionDto usr, bool seeded, bool flat, string filter, int pageNumber, int pageSize);
        public Task<ISight> ReadSightAsync(loginUserSessionDto usr, Guid id, bool flat);
        public Task<ISight> DeleteSightAsync(loginUserSessionDto usr, Guid id);
        public Task<ISight> UpdateSightAsync(loginUserSessionDto usr, csSightCUdto item);
        public Task<ISight> CreateSightAsync(loginUserSessionDto usr, csSightCUdto item);
/*     public Task<csRespPageDTO<ISight>> ReadSightsAsync(loginUserSessionDto usr, bool seeded, bool flat, string filter, int pageNumber, int pageSize);
    public Task<ISight> ReadSightAsync(loginUserSessionDto usr, Guid id, bool flat); */
}

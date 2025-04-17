using Models;
using Seido.Utilities.SeedGenerator;

namespace Services;

public class csSingleton
{
    public Guid id {get; set;}
    public string Sentence {get; set;}

    private static csSingleton _instance = null;
    
    private csSingleton()
    {   
        id = Guid.NewGuid();
        Sentence = new csSeedGenerator().LatinSentence;   
    }

    public static csSingleton Instance
    {
        get {
            if (_instance == null) {
                _instance = new csSingleton();
            }

            return _instance;

        }
    }
}
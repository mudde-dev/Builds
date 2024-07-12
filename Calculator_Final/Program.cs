using System.Collections.ObjectModel;

namespace Calculator_1._2
{
    internal class Program
    {


        static void Main(string[] args)
        {

            Calc2 calc2 = new Calc2();


            Console.ForegroundColor = ConsoleColor.Green;
            Console.Title = "El Calculator";
            Console.WriteLine($"{Console.Title,50}");

            Console.WriteLine("\n (=^ェ^=) Welcome to the Great El Calculator ");

            string menuChoice = "0";
        mainMenu:
            while (menuChoice != "6")
            {
                Console.WriteLine("\nHere is the menu: Please make a choice for a calculation\n");

                Console.WriteLine("1. Addition");
                Console.WriteLine("2. Subtraction");
                Console.WriteLine("3. Division");
                Console.WriteLine("4. Multiplication");
                Console.WriteLine("5. See the record of your calculations");
                Console.WriteLine("6. Quit the Program");


                menuChoice = Console.ReadLine();

                Console.WriteLine();

                //giving the addition subsection a cyan color
                Console.ForegroundColor = ConsoleColor.Cyan;

                switch (menuChoice)
                {

                    //Addition case "1":
                    case "1":
                        //declaring the variable that we are going to be using to do the calculation
                        int additionNumber1 = 0;
                        int additionNumber2 = 0;

                        Console.Clear();

                        //welcome text add
                        calc2.chosenAdd();
                      

                        //user inputs the numbers wanted to calculate
                        additionNumber1 = int.Parse(Console.ReadLine());

                        Console.WriteLine("Please input your second number");

                        additionNumber2 = int.Parse(Console.ReadLine());

                    
                        //Print out of the numbers chosen to calculate
                        calc2.DispAddCalc(additionNumber1, additionNumber2);   


                        //user given choice to either continue with the given numbers or got back to tha main menu
                        Console.WriteLine("Would you like to continue with these? (Y/N)");
                        char ch1 = Convert.ToChar(Console.ReadLine());

                        //the choice of whether to continue or go back to the main menu
                        bool goOn = false;

                        if(char.ToUpper(ch1) == 'Y')
                        {
                            goOn = true;
                            //the equation itself
                            calc2.AdditionResults(additionNumber1, additionNumber2);
                            calc2.MoveForward();
                        }
                        if(char.ToUpper(ch1) == 'N')
                        {
                            
                            calc2.ChoiceIsNo();
                        }
                                                                 
                        break;


                    //Subtraction
                    case "2":
                        Console.ForegroundColor = ConsoleColor.Blue;

                        //declaring the variable that we are going to be using to do the calculation
                        int subNumber1 = 0;
                        int subNumber2 = 0;

                        Console.Clear();

                        calc2.chosenSub();
                     

                        //user inputs the numbers wanted to calculate
                        subNumber1 = int.Parse(Console.ReadLine());

                        Console.WriteLine("Please input your second number");
                        subNumber2 = int.Parse(Console.ReadLine());

                        calc2.DispSubCalc(subNumber1, subNumber2);



                        //user given choice to either continue with the given numbers or got back to tha main menu
                        Console.WriteLine("Would you like to continue with these? (Y/N)");

                        //the choice of yes or no
                        char ch2 = Convert.ToChar(Console.ReadLine());

                        bool goOn2 = false;

                        if(char.ToUpper(ch2) == 'Y')
                        {
                            goOn2 = true;
                            //the equation itself
                            calc2.SubtractionResults(subNumber1, subNumber2);
                            calc2.MoveForward();

                        }
                        else if(char.ToUpper(ch2) == 'N')
                        {
                            calc2.ChoiceIsNo();
                        }
                        break;


                    //Division
                    case "3":
                        Console.ForegroundColor = ConsoleColor.Magenta;

                        //declaring the variable that we are going to be using to do the calculation
                        int divNumber1 = 0;
                        int divNumber2 = 0;

                        Console.Clear();

                        calc2.chosenDiv();
                     
                        //user inputs the numbers wanted to calculate
                        divNumber1 = int.Parse(Console.ReadLine());

                        Console.WriteLine("Please input your second number");

                        divNumber2 = int.Parse(Console.ReadLine());

                        calc2.DispDivCalc(divNumber1, divNumber2);

                        //user given choice to either continue with the given numbers or got back to tha main menu
                        Console.WriteLine("Would you like to continue with these? (Y/N)");
                        char ch3 = Convert.ToChar(Console.ReadLine());

                        bool goOn3 = false;

                        if(char.ToUpper(ch3) == 'Y')
                        {
                            goOn3 = true;
                            //the equation itself
                            calc2.DivisionResults(divNumber1, divNumber2);

                            calc2.MoveForward();

                        }
                        
                        else if(char.ToUpper(ch3) == 'N')
                        {
                            calc2.ChoiceIsNo();
                        }
                        break;

                    //Multiplication
                    case "4":
                        Console.ForegroundColor = ConsoleColor.Yellow;

                        //declaring the variable that we are going to be using to do the calculation
                        int multNumber1 = 0;
                        int multNumber2 = 0;

                        Console.Clear();
                        calc2.chosenMult();

                        //user inputs the numbers wanted to calculate
                        multNumber1 = int.Parse(Console.ReadLine());

                        Console.WriteLine("Please input your second number");

                        multNumber2 = int.Parse(Console.ReadLine());

                        //the equation itself
                        calc2.DispMultCalc(multNumber1, multNumber2);


                        //user given choice to either continue with the given numbers or got back to tha main menu
                        Console.WriteLine("Would you like to continue with these? (Y/N)");
                        char ch4 = Convert.ToChar(Console.ReadLine());

                        bool goOn4 = false;

                        if(char.ToUpper(ch4) == 'Y')
                        {
                            goOn4 = true;
                            //the equation itself
                            calc2.ProductResults(multNumber1, multNumber2);
                            calc2.MoveForward();

                        }
                        else if(char.ToUpper(ch4) == 'N')
                        {
                            calc2.ChoiceIsNo();
                        }
                        break;


                    //Gives the user the option to view earlier calculations
                    case "5":
                        calc2.DisplayResults();
                        break;

                    //Quit
                    case "6":
                        Console.Clear();
                        Console.WriteLine("You have chosen to Quit the program!\nThank you, and Goodbye ( * ^ *) ノシ");
                        Console.WriteLine();
                        Console.ReadKey();
                        break;

                    default:
                        Console.Clear();    
                        Console.WriteLine("The choice you made does not exist on our menu\n Please try again, thank you");
                        break;
                }
                Console.WriteLine();

            }
        }
    }
}
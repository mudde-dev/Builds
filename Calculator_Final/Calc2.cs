using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator_1._2
{
    internal class Calc2
    {


        private int additionNumber1;
        private int additionNumber2;

        private int subtractionNumber1;
        private int subtractionNumber2;

        private int divisionNumber1;
        private int divisionNumber2;

        private int multiplicationNumber1;
        private int multiplicationNumber2;
        private int sum;
        public int diff;
        public int quotient;
        public int product;
        private bool choicecont;


        //displays the numbers chosen for the calculation by the user
        public void DispAddCalc(int additionNumber1, int additionNumber2)
        {
            Console.WriteLine($"Your chosen numbers are {additionNumber1} and {additionNumber2}\n");

        }
        public void DispSubCalc(int subtractionNumber1, int subtractionNumber2)
        {
            Console.WriteLine($"Your chosen numbers are {subtractionNumber1} and {subtractionNumber2}\n");
        }
        public void DispDivCalc(int divisionnNumber1, int divisionNumber2)
        {
            Console.WriteLine($"Your chosen numbers are {divisionnNumber1} and {divisionNumber2}\n");
        }

        public void DispMultCalc(int multiplicationNumber1, int multiplicationNumber2)
        {
            Console.WriteLine($"Your chosen numbers are {multiplicationNumber1} and {multiplicationNumber2}\n");
        }
    
        //shows the result of the calculation of the two chosen numbers and shows them
        //the result of their calculation
        public void AdditionResults(int additionNumber1, int additionNumber2)
        {

           sum =  additionNumber1 + additionNumber2;

            if (additionNumber1 == 0 && additionNumber2 == 0)
            {
                Console.WriteLine("\nOgiltig Inmatning");
            }

            else
            {
                sum = additionNumber1 + additionNumber2;

                Console.WriteLine($"\nYour sum is: {sum}");
                resultsList.Add(sum);
            }
            




        }

        public void SubtractionResults(int subtractionNumber1,int subtractionNumber2)
        {
            diff = subtractionNumber1 - subtractionNumber2;

            if (subtractionNumber1 == 0 && subtractionNumber2 == 0)
            {
                Console.WriteLine("\nOgiltig Inmatning");
            }

            else
            {
                diff = subtractionNumber1 - subtractionNumber2;

                Console.WriteLine($"\nYour difference is: {diff}");
                resultsList.Add(diff);
            }

    

        }

        public void DivisionResults(int divisionNumber1, int divisionNumber2)
        {
            if (divisionNumber1 == 0 && divisionNumber2 == 0)
            {
                Console.WriteLine("\nOgiltig Inmatning");
            }

            else
            {
                quotient = divisionNumber1 / divisionNumber2;

                Console.WriteLine($"\nYour quotient is: {quotient}");
                resultsList.Add(quotient);
            }

        }

        public void ProductResults(int multiplicationNumber1, int multiplicationNumber2)
        {
            product = multiplicationNumber1 * multiplicationNumber2;

            if (multiplicationNumber1 == 0 && multiplicationNumber2 == 0)
            {
                Console.WriteLine("\nOgiltig Inmatning");
            }

            else
            {
                product = multiplicationNumber1 * multiplicationNumber2;

                Console.WriteLine($"\nYour product is: {product}");
                resultsList.Add(product);
            }
            

        }

        //shows them a text referring to that they have chosen the right operation, we could give them
        //an optioon to quit through pressing 'q' , but i couldn´t really get it to work
        public void chosenAdd()
        {
            Console.WriteLine("\nYou have chosen to ADD two numbers together.\n(Whole numbers only please.)\n");
            Console.WriteLine("Write your first number");
        }

        public void chosenSub()
        {
            Console.WriteLine("\nYou have chosen to SUBTRACT two numbers.\n(Whole numbers only please.)\n");
            Console.WriteLine("Write your first number");
        }
        public void chosenDiv()
        {
            Console.WriteLine("\nYou have chosen to DIVIDE two number.\n(Whole numbers only please.)\n");
            Console.WriteLine("Write your first number");
        }
        public void chosenMult()
        {
            Console.WriteLine("\nYou have chosen to multiply two numbers.\n(Whole numbers only please.)\n ");
            Console.WriteLine("Write your first number");
        }
        //A list to save all the equation answers in
        private List<int> resultsList;

        
        public Calc2()
        {
            //initialising the list
            resultsList = new List<int>();
        }


        // a method to display the results of the equation
        public void DisplayResults()
        {
            Console.WriteLine("Your calculations answers: ");

            foreach(int calc in resultsList)
            {
                Console.WriteLine(calc);
            }
        }

        //method for moving on
        public void MoveForward() 
        {
            Console.WriteLine();
            Console.WriteLine("\nPush Enter to move forward\n");
            Console.ReadKey();
        }

        //When the choice is No, this is what is displayed
        public void ChoiceIsNo()
        {
            Console.WriteLine();
            Console.Clear();
            Console.WriteLine("You have chosen No (N), you are going to be moved back to the Main menu.\nThank you!");
        }

        

      
    }
}

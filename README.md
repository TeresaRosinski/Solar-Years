# Solar-Years

#### Epicodus:: Week Five:: Solar Years Project:: 06.26.2020

#### By Teresa Rosinski 

---

## Description
This application will convert a person's earth years into years corrolated with the planets: Mercury, Venus, Mars, Jupiter. 

The program will then give then determine how many years a person has left to live on each planet. If a user has lived past their expected age, the program will tell them by how much. 


---

## Setup/Installation Requirements
Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. In the terminal run: npm install
3. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`$ git clone https://github.com/TeresaRosinski/Solar-Years.git`
2. Navigate into the `Solar-Years` directory in Visual Studio Code or preferred text editor
`$ code .`
3. In the terminal run npm install
4. Open index.html in Chrome or preferred browser:
`$ open index.html`

---

## Specifications

Behavior: The program only allows numerical values to be tested.  
* Input: 3, t        
* Output: 3, 'please only enter numerical values' 

Behavior: The program only accepts numerical values greater than 0 and less than  150     
* Input: 1, 0, 151     
* Output: 1, 'Please enter a value greater than 0', 'please enter a value less than 150'

Behavior: The program converts the entered value into Mercury years (.24 Earth years). The formula for this will be Earth Years/.24     
* Input: Earth years = 30       
* Output: Mercury years = 125

Behavior: The program converts the entered value (Earth Years) into Venus years (.62 Earth years). The formula for this will be Earth Years/.62     
* Input: Earth years = 30       
* Output: Venus years = 48.387

Behavior: The program converts the entered value (Earth Years) into Mars years (1.88 Earth years). The formula for this will be Earth Years/1.88     
* Input: Earth years = 30       
* Output: Mars years = 15.957

Behavior: The program converts the entered value (Earth Years) into Jupiter years (11.86 Earth years). The formula for this will be Earth Years/11.86     
* Input: Earth years = 30       
* Output: Jupiter years = 2.529

Behavior: The program will tell the user how many years a human is expected to live on each planet based on global life expectancy on Earth of 72 years
* Input: Earth, Mercury, Venus, Mars, Jupiter       
* Output: Life Expectancy Per Planet = 72, 300, 116.12, 38.29, 6.070

Behavior: The program will tell the user how much expected life they have left to live on each planet by subracting their already calculated per planet age from the expected life lived on that planet
* Input: Earth years = 30,        
* Output: Life Left in Years on each planet = 42, 175, 67.013, 22.943, 3.541

Behavior: The program will tell the user how many years they have lived past the life expectancy number, if that is the case, based on the global life expectancy age of 72.
* Input: Earth years = 100 
* Output: Age Per Planet = Earth: 100, Mercury: 416.67, Venus: 161.29, Mars: 53.19, Jupiter: 8.4431       
* Output: Surpassed Expectancy Years on Each planet by Earth: 28 years, Mercury: 116.67 years, Venus: 45.17 years, Mars: 14.9 years, Jupiter: 2.361 years 

## Known Bugs

No known bugs

---
## Support and contact details

Teresa Rosinski's email: 
_trosinski89@gmail.com_

## Technologies Used

* _Markdown_
* _Git_
* _HTML_
* _CSS_ 
* _Javascript_
* _Boostrap_
* _jest_
* _babel_
* _ESLint_



---
### License

**The MIT license**

Copyright (c) 2020 **Teresa Rosinski**
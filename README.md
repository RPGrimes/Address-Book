# Address-Book
My task was to create a small address book web site with three pages. There is no database involved (everything should be stored in memory).

## Task Requirements

1. First page should allow the user to input up to 50 names and phone numbers at a time (so the user can input several batches of numbers, but limited to 50 at a time. Assume that there will never be more than 300 names/numbers in total). Name is tied to only one phone number. Names should be validated to be only letters and blanks, phone numbers should be validated to contain only numbers, with an optional + prefix and possibly one pair of brackets. The phone number must start either with a + or a 0. If it starts with a +, it cannot be followed by a 0.

These are valid phone numbers:
- 02012345567
- +443739182931
- +44(0)203739182

These are not valid phone numbers: 
- 1322282828 (does not start with a 0 or +)
- 020-10391-20201 (has non-numeric characters)
- +01029818 (starts with + followed by 0)
- +44(0)202839(4)3932 - more than one pair of brackets

The names and phone numbers should be stored in memory.

2. Second page should list all stored numbers and names, sorted alphabetically.

3. Third page should allow a user to search the address book by phone number (exact number, not substrings) and by full name or part of a name. It should display all matching names and related phone numbers for the search criteria.

**Constraints**

You may develop the solution in React or native JavaScript, however the site should work out of the box just by opening in the browser or ran from the command line via nodeJS (no special setup required).

**Deliverables**

Deliver the solution in zip file containing the source files.

## Installation
- Run `git clone https://github.com/RPGrimes/Address-Book.git` in your terminal

## Usage
- Run `npm install` after cloning the repository
- Run `npm start`
- Visit `localhost:3000` in your browser to see the app.

Once in the app you are directed to the index page, on which you can add contacts to the address book. There are buttons linking to the `/list` route where all contacts in the address book are displayed in alphabetical order along with their associated contact number and to the `/search` route where the user may search for specific users via name or number.

## Approach
I started by reading through the requirements and breaking this down into smaller tasks in order to come up with an MVP. I then drafted how I'd want this to look in Figma (see picture below). The completed MVP comprised:
- A user can enter a single name/number to the address book
- A user can view a list of all names in the address book in alphabetical order
- A user can search using name and/or number for a specific contact within the address book
- Validation of names/numbers being submitted into the address book

![Figma Mockup](https://user-images.githubusercontent.com/75947453/154551189-4236c4a2-c4b2-4e39-862e-48319a2247f4.png)

## Incompletions / Future Additions
Unforunately I did not manage to satisfy all of the requirements set out for this task. My next task was to allow for batches of up to 50 names/numbers to be added to the address book at once. My plan to complete this was to allow for commas to be used in the names/number submission forms. This would allow for a list of names to be submitted as a comma seperated value. I would then split these values for name and number to generate an array of names and an array of numbers. If these arrays were not equal in length of the lengths of them were >50 I would generate an error informing the user their batch is greater than 50 and is therefore not a valid input. My next step would be to write a function that creates key-object pairs based on the respective name/number index values (e.g. `{name: name[0] : number: number[0]}`). These key-object pairs would be added to the existing contact list, providing that the length of the contact list plus the length of the key-object pairs to be added would not exceed 300.

After completing this I would refactor the code to be more succinct by either combining similar functions and removing superfluous code. 


# Maker-pre-launch Landing-page
This is a Frontend Mentor challenge that i completed using React. I am using these Frontend challenges to
improve my programming skills.

## What i learnt
Setting styles on components using props of boolean type. Assign a class to the 
component when the value of the prop is either true or false. Used this method
as i had more than 1 component in a parent and wanted to style them differently.
eg: see the `card.js` file , which is the child.
- the prop was retrieved with this code `let className = props.limebg ? 'limebg' : ''`
- the parent is found in the `pricing.js` - see how the class `limebg` is assigned
``` <Card src={paidversion} alt="paid version" title="Dive right in" limebg={true}
                    description="Ready for the big time? Our paid plan will help you take your business to the next level."
                    subtitle="$25.00" subtitle2=" /month" item1="Custom domain" item2="Advanced analytics and reports"
                    item3="High marketplace visibility" item4=" 5% fee per transaction"
                />
 ```

## Using the Website
You can run the app using the live preview link below:
- **live preview link**
    https://maker-pre-launch-landing-page.netlify.app/

- altenatively you can download the project on github and do the following steps
    - install dependencies by  executing `npm install` on the terminal
    - run the project using `npm start`
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Mobile design preview
![Mobile preview of finished project](./src/assets/mobilemaker.png)
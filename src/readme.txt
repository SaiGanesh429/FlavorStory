https://www.swiggy.com/city/hyderabad/homely-kukatpally-circle-no-24-manikonda-rest80482

Create context in a separate File and below is  the code to initialize the values for the first time

const DefaultContexts = createContext({
    theme: 'light',
    loggedInUser: "Sai Ganesh Kanigolla"
});



-------------------------------------------------------------

// UseContext is one of the Hook is used to get the data from one component to another component. 
//And these Hooks works only on functional component but not on class based components

1. Set Data to context using "CreateContext"

const DefaultContexts = createContext({
    theme: 'light',
    loggedInUser: "Sai Ganesh Kanigolla"
});

2. Get Data from context using "UseContext"

  const { loggedInUser } = useContext(DefaultContexts);

And in order to use the context in Class Based components then use as below

Example: In the below code, DefaultContexts is the name of the context which we created

<DefaultContexts.Consumer>
{(data)=>{
    console.log(data)
}}
</DefaultContexts.Consumer>

--------------------------------
TO set a new data to the context then , 
<DefaultContexts.Provider value ={{loggedInUser: "Test User" }}>
/// Here whatever you wrap the component in this section, those all the components will have the new data available instead of initial data
</DefaultContexts.Provider>


Example:


<DefaultContexts.Provider value ={{loggedInUser: "App User" }}>
//App component
// Home Component
<DefaultContexts.Provider value ={{loggedInUser: "Child User" }}>
// Child Components
</DefaultContexts.Provider>

</DefaultContexts.Provider>


** From the above clear, the APP and Home Component will get the "loggedInUser" value as "App User"
** Child Component will get the "loggedInUser" value as "Child User"

==============================================================================

We can add any function or new variable to the existing default contexts defined in the separate file in any component

<DefaultContexts.Provider value ={{loggedInUser: "App User" , handleUserName}}>
//App component
// Home Component


</DefaultContexts.Provider>

** Note: in the above code handleUserName is the function which we return some logic, so I have set a new function handleUserName at the APp level and use across the application
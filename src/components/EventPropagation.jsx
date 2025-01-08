 export const EventPropagation = () => {
    const handleGrandParent = () =>{
         console.log("GrandParent Clicked");
    };

    const handleParentClick = () =>{
        console.log("Parent Clicked");
   };
   const handleChildClick = (event) =>{
    console.log(event);
    // event.stopPropogation();
    console.log("Child Clicked");
};

    return(
        <>
        <section> 
            <div onClickCapture={handleGrandParent}>
                <div onClickCapture={handleParentClick}>
                    <button onClickCapture={handleChildClick}>
                        Click me!
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

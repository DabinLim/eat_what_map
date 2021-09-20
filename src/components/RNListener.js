
const RNListener = ({children}) => {
    const listener = (event) => {
        const { data, type } = JSON.parse(event.data);
        if ( type === "Location" ) {
            console.log(data)
        }
    };
    if (window.ReactNativeWebView){
        // android
        document.addEventListener("message", listener);
        // ios
        window.addEventListener("message", listener);
    }

    return (
        <>
            {children}
        </>
    )
};

export default RNListener;

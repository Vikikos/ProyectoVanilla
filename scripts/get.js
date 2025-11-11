let getDate = () => {
    let date = new Date();

    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    formatDate = dd + '/' + mm + '/' + yyyy;
    return formatDate;
}

let getTime = () =>{
    let date = new Date() 
    hh = date.getHours() 
    mm = date.getMinutes() 
    ss = date.getSeconds() 

    dateUser = hh + ':' + mm + ':' + ss;
    return dateUser
}
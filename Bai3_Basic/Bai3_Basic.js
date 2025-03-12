let emails = ["ppa@gmail.com", "rikka.com", "hello@myname.net", "spa ce@out.com"];
if(emails.length === 0){
    alert(`Mảng không có phần tử nào`); 
}else{
    for (let i = 0; i < emails.length; i++) {
        if(emails[i].includes("@") && !emails[i].includes(" ")){
            console.log(emails[i]);
            temp = 1;
        }
    };
    if(temp === 0){
        alert(`Mảng không hợp lệ`)
    }
}


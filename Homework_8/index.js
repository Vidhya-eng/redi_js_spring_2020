const dressListCmp = document.getElementById("dressList");
const freeShipping = {
    deliveryCharge: "Delivery is free for all purchases above 100€"
}
const dressList = [
    {
        imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PDxANDxAPDw8QDw8PDw8PDw8PFREWFhURFRUYHSggGBolGxUVITIhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0mHh8tLSstLS0rKystLSstLi0tLS0tLSstLS0tLS0rLS0tKy0tLS4wLS0tLS0tLSstLS0tLf/AABEIASIArgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUGB//EAEAQAAEDAgMEBwQHBwQDAAAAAAEAAhEDIQQSMQVBUWEGEyJxgZGxIzKhwQcUUnKS4fAkM0Jic7LRU2Oi8RWCwv/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACsRAQACAgAFAwMEAwEAAAAAAAABAgMRBBIhMTIiQXEjUdGBoeHwYWKRM//aAAwDAQACEQMRAD8A1EIqQopSkKIqIIooigCiKiBUlWo1olxDRzICTGYkU2yddwXHYp1bEVAG53veYa1tzyAC5m2nUV26z/yND/VpjvMD4rJaZAIIIOhBkFabC9F8YyjmfTGYOechc0ughsctxWtwmPfh6pDmlrZ7dOI8RwPquYyRPZ1bFaO8OthRJRqte0PYQ5rhIIVisVlQKZAoEKUpylIRBSEpTpSgUpSmKBQZ0IQmUhElUhNCiBVE0KQgCSq8NBc4wAJJVkLnsfj+sqmmCQxhMxq5w1J5Bc2nUOq13KramJ6w7w3hpIXUfRrsxnaxD8oLn9XTzEDsj3onfPouAxOKz1Gsp3c97WN0gFxgX0mT3L1rZOzKpwVKnh6opFtMB4LGvzGLzM/xTKy5p6a+7bgjruPZ0WPwggxGi8l6dUGSXtLC4OhwBBIHML0nH4dzMLkkSXNaQLNym0WXB9MdkPo0KrnPJZlJpshggi490BU4tRZdm3NNac30a2iab+qeew82n+F/5rsIXnGCdL2Rvc2DwMiCvRmG0XC31l5lhKUhPCUhduSEIJ0pQIUpTlKUCFKnKUohnIqQoiUQRUQRRSEYQK50Ak6ASV55tMubVf2oDiTaNCdJXa7VxopjJBLntcbCzWAXceAuuHxrZlznSSeywepVdp6rKxqNrtjPDcTgzLW5sRT94SGtzASecnfwC9S6AbTOIwbslQCtTdUp1W3scxLSCbwQRfkV49h67qVWlWABdSqMqNnSWODgI4WXoH0VONR+Nq2a99Rr7aDMXGL7plU8REcm/sv4a0xk+XfbXY52GdL6TB/G01SDbddsnXUea4XpZiXPo4WjUf26rmNLGgvLQXT3khs8Lwut6QY57Kd6NN7ogPnQ9xC8g2ljsQzFNxEuzMnK7KHBliLA23qrDWLTto4nJquo91WxGh2JYPfBL90ZwATpuMXXfUAYuSeZBBhecbAY51ell0Y5r3uH8LGntE8o9V6ZC2xDzpkECiUpXTkEpRSlApSpylKIKUqdKUGfCiMKQiQURRhAqMIwog5fpTTd11Jx/dZO1wlhLoPwXJ1qvaJaLRA5Lp+lGNFRwpMDpnLNwDe8LQ42j/CwANaQ0mQe1F/Liqt9VuujFpjrHXmALxuAXo/0T08gxVTK5zXGnTBaJ7TQSZ4HtBcNsbAOqy5oaAxhNQl7GAA6e8RMm1p1HFddhs2UuoVvq9WjNJopuNFzi2SGPOYWc28mwjTUjjLHNGlmKeWdu/2tTFZpa2dIFovzXKuwDGZjVYxjGe8972hgA3krX7Q2lji5/wBXxOJdlpU6lSllaajXOa0u6skEujNOUxFhJMLQvo1672vL61RvWEsrVycjQAb5Xm0QZI4EKimGY91988T2qR4FbEVHYakBJLBTAfSz04vVfBHOx5WkrptlCr9X6yr2oq1WktIcA1roEEaiQVp8PRfQzVTUAD2Fhc17auVhc0PfO4X1PEmLLo+jLh9TqU7kMr1W5ibuMNJJ4GSfJW3vNY6KqUi06siUpcKewORcPJxTlaYncbZZjU6IUCmKUqUEKBTFKVCCoIlBSNhCMKIoAoiogCx9oNeaVQUzDyxwaeDosslY2Mc+MrGzOpkNAHf+SiUw4uSyi8vBLnNOUyMwNteA184VOFo56JAhslmZ3HM4N8l1LOjwf1bahkuec2WzeSt6W7DZh8KSwXhoIHMhZpvq0V95bIpus2jtDV7P6pjGhhwrKw6pxfUApvptDGh9IscyXg3OZpklw0mDgY80spdTex/tMobo4UrwA513CI/WuuaSNL/EqogiDF+W48lfys3M3zC+pApOcajg1ucPdnLRzm9vGyw8Xhn0zVFd0uaGhjnOJLzY5GzdzYJ5SAtdRqOabEjjfVQjz4qIqTfbZfXWBoYwta4kuqPI7M5pYWOJzGAS0tPxmV0PQgn6tiojKMS4iP6bR8guGqDKeMhdP0LxZbQxNPi4ED/1VeavpXYLetv8D7h++71V5VOzx7JnPMfNxV5V1e0KLeUkKQpylKlyQpSmKUogClTFBBsVEYUUiKIqIBCMIqKBbgx7Rn3lT9Ig/ZwOP6Cuwn7xn3gh0/ZNKn9+mD4uCx5Y+rD0MM/Ql5fV9m99M6sc5pPNpI+SlQiJ0gxv4LZ9MMPlxJc0D2jGv4XEtPoFpSH6Rvkwdf1K2MBhHPj+SszhUugExbuHkkLp8DBgIBiqknuC3/RGkerrP3aeMLmntkgCbmBPEr0no/s3q9mMMdp7C895uqc06hfw9d2X4AeyZ931Mq4pMIPZ0x/Iz0Ccq6FE9yFIU5SFEEKUpilKAFBEoINmoiopEUUUUCKIqIMjZ7M1Vg5z5BL0w7WHe7/TId+EysrYzfaE8GFYvSN/7NVZbM6QBxJEBYss/V+Ho4I1h+duO6afvKGnu1ZvbVkfNaF9hy5jXVZ23cSKuIeRdreww8myJ8TJ8VrapBtO6I8FteepqmfIeUKqO/v7+SyHixmO/UKkgfkgo3/iPiASPRe6YXBtGGps3Ciwf8V4XPHmD3GxXvOzKufDUHfaosPm0LLxPs28H3lzdFsNDfsy38JIHoiUw96qOFR3oD80CtFJ3WJZMkatMKykKscqyunBCkKcpSgVBEoKRtFFFEBUURUCKKKINlsI+0d935rnOnWMyENGuaR94AkfEBdFsM+1P3FwXT+vmxQbNmyf18Vk1vM371w8f33c6wxEb5jRVvNzYcE+W3P1KqDpkxr8L6ha2FC635aqsnW3GyZ8zERbfrulVk3tuE70FIXtXQqvn2dhuLaLW/h7PyXirh+S9Y+jKtmwOU/wOqt/5Fw9Qs/Ex6dtXCzq+gpmX1/6p/tCcqrDe9WP+6f7QrSrcfjCjL5yrckKsKrK7VkKQpykKAFBFBSNoooigiiiigFRBFBsNi/vHH/bcvMuk9QuxlY8DlHA/qV6fsVvaqf03Ly/bY7bHHV4e88b16kfAAeCz1j6tmq0/QrDXTA32OsGN6oFSJ47hw0iFnOPYOulz3LXVBfitDMUyTcRy0QefkARv3p9Z/ykqPn/AKEIFe4SDe1zw8F6J9E1eRXpbw/NHAOYAP7SvO207SV2/wBFLyMZXaN9IO/CSP8A69FVmjdJXYJ1khvcOINX+s/0CsKqoO9pXbwqk+YH+FaV1j8YcZfOVbkhVjlWV2rVlKU5SFAqiKCkbNFBRAVFEVAigURQbHYh7bhxbC8/6cYA0sS1mnZcQYiWurOcL8s0L0LYFPNVI/lK5n6UstSlha7QTFSpSLrQDBMTxlnos0TrNP8AltmObh4/x+XEMfLT3eBWI+J8D3HksmmOzoSSbG0W5LGqx5/BaWNW0c55zZAg3+IMIOaL/qbqMFgO6BMwgJPLuXpf0T7MpuoYnEAHr+tdQbJAa6n1bHZW88xPw4LzIg758V6Z9HOJybPcCOyceWlx3jq6ZLvC/kqs3jpdg8+/ZaxpbVrMcC12fPlcCDBtMcLDzVhWRtWo4YupRL3Pa1ge2bxJjXU/kqCusfjDnN5ztW5I5WOVblYqIUhTlIVAVREoKRslFFEBRQUQEKKKKBstg1IrtkwCDPO1/hPktDt4B2Bx+GreyfhX9ZRJ92sWvGXIdxIaLH7R11Wa1xBkWIuCqNtv6zDVg/L2aFUB5F2tykkW1brbyhVzXrtopkjl5ZeatJtznXjxHBV1QTy18/RNSNm6SddZElGpOpjTW2qsUKS2eW9DL5cOaY6C2sH/AKQH63TyQIR5X7l2fRXbNMYVuCZTrPxJxD3sytBp5HNa0E3mQ435Lj7xP+ea3XQaqRjHZZGbD1GkixAzM0Oo4WgwTcKLRt3SdT1d5j3B2JcRByUKNF7gZDqrJzwd8Heqyi1oAgWAQKVrqNIvbmtMkKrcrHKty6cEKUpilKgKUExSqRsUUFEBRQUQMogooBWLtVhOHrgCSaNUBumY5DaeeiykHNkEcQR5oPK6Lt50nyH6Ksg2nSY08k9HDaWfcBw7B0Ak98GPNZp2ZVIDhTe4Fhdma0kEeGijcQ7isz2aonnuk7lBr671scLgA+k+q55aW1MjWgDtHLPfvHgOYS4nZ5D2BjXdtpc3MQJAJ3mNw+BU7REbYDue7x5LcdCXftjv6FTyzsKel0cxBLM7Mmc5SJBI4OInSVm9G9muoYx7Xlpd9XdBaTf2jJ18FzF4mdQ6tjtEbmHVlIUxSldKyuVbk7lWVIUpSiUCgUqKFBBsFEFJQMilUlAykoKKAykoIhBmbLoAuc6BJiTG+InygeCo2u4UWmDE2Ebgs/YzZDh/N8lznS0luYA3k+Fl59+uSXr4vTij4Y2x9m0yw1HsBc973CZjLMC2m6fFbzAYZrqwJaDDIiOB/NY+HZlYxv2WNHkAFs9jslxPcFqy9KMOD1ZdqtqENl+8aciuf2J2utqkXc8tDjrlAHzJ8lu+k7YaYWn2GIoN+8/+4qvh46r+Lt6YhsCkKJKUrW88pKrKdxVZRIFKUSlKhAKKIKRnqIKIGUQUQGUZSqKA0opJRlBuNiujzK5rpn73fI+BW+2W/wCa0PTTVv3vkvPnzn5etH/nHwzWOkA8QCt5sRvZJ4krn8Oewz7jfQLf7Ef2COBK08R4wycJ5z8MDpCZBWn2X+6b3v8A7ytjtyp7x4SsDACKVPmwHzv81xw0dZd8XPSGRKUlQlKStbCVxSFElKSoSBSlQoEohFEFFIz1ECogKiCkqAUJQlAlA0qSklDMpS2Gzn9qFqemmrO+fgs/Z7/aAcVh9NW2YeH+FgyRrI9LFO8MLaPut+630W72L7j+8+i0TTYdwW72Cey/v+S0cR4s3C+f6NN0jdAcBqbeKAEADgICO3hNRg4vb5AyfRISo4ePTtPFz6og0pSUJQJV7KBKQokpCUEKVElBEIiEFEGeUFEFKUUlBRBEEVIQKUsKyFIQTDuyvaf5grel9KaQKqyrM20M+FJGuW3ksmeNWiW7hZ3S0MAhbrYHuv7/AJLUgTBG/TxW52KwtcWHU346QrOI8VXC+f6NPtoftDBwDnfCPmqFkbTviqn8rQB4n8lSQpwxqkOeIneSSKFEpSrVBSlKJKCIBRSEYQBFGEQFIyZURhEBEhCkJoRhEFhGE0IwgXKjlTAJoUJCkYIMAxeCJBgTpvW3HUnDua5jnOgZYMMA854LX4V2V7T3g9xEH1W3o4UQRG6P8LPntqYa+GrExPVotm4llbGsosY2iC19QNEuZTYwgZGzq641tY20XV0dnspVpObq3QBBuwXkAn58FxTXCliWE9k9bkDxqzM0kO5gFpnlK7iniS7DlzwA5uZpj7Q3ri15mI27rSsTMR93EVy01qrp7RgPEy1pvEGFW5yxus9pWI+3HkPzTZpWinjDLk85OXoSlIKLWrtxMTHSUUhOGJ2sRCsNRDFeKacU0QoDEciyRTTBikVQiAiAigCKKkIlAEQEQE7QoChqYNTtCsDUFQat9hzFNjtczR5jVafIthszG5TkrNcaYbDXNE5ZOsDU3+AVWWnNC/Bfks0XSnCEOZXaDDXHNa05XAT+Jy3NXEubhWAk5jqLfYHjKycQ6gKYe5+clmV9IFjZLmXkE6Zh8SsPZu0OwaVek8MDjlqi74iJgX4bo11sVxSvp1LZXLSszbpMzpyNOm4NbLHNc5zi8Oa5pidTOlldQpyXEXA05+K3G1KLXVAaYf2Xtu4EyzLBM9945KNogCwC011pXa+LcT0/sfnuwKdAxdXCiFlZVMqncKuemoi326/v/DH6oJhTV2VSE6FrY57ajt7e2uv7/wDVYajCaFIU7hNb4/f7fb/b8fgsIwjCkKJVZOWYjWvf+FARUUUKRCKiiAhO1BRQLWqwKKIHTNUUUOoGUr1FFCZVFK5RRdOAKVRRBFFFEQCiiiCKKKIP/9k=",
        name: "Women's Dress Sleeveless",
        description: " Sleeveless Cocktail Dresses till Knee Length",
        Price: 37,
        shippingCost: {
            cost: freeShipping
        }
    },
    {
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81Yq1G6O-CL._AC_UY445_.jpg",
        name: "Women's Maxi Floral dress",
        description: " Multicolored casual Floral dress with line",
        Price: "25€",
        shippingCost: {
            cost: freeShipping
        }
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF1avcP5Nli-Mu5mYvk1HvIhqu8QpFFumFonCHNNBwmuP9_1f4Qox_dJLTiM9ep58ZFTXEcHE&usqp=CAc",
        name: "Women's Summer dress",
        description: " Long Casual Elegant Dresses Party Dress ",
        Price: "35€",
        shippingCost: {
            cost: freeShipping
        }
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMancKgpx0vgr9eGIYERMONz6vWT-F5XuMgWmBnrjbOD04KCmQ0KYi-lEVsTrPe6hb264ZLrhU&usqp=CAc",
        name: "Women's Nightie",
        description: " Short,pleasantly loose cut ,100% cotton",
        Price: "15€",
        shippingCost: {
            cost: freeShipping
        }
    }

];

let showCart = [];

function dressListInput() {
    for (let i = 0; i < dressList.length; i++) {
        const dressElementDescr = document.createElement("div")
        dressElementDescr.innerHTML = `<li> <h5>${dressList[i].name}</h5>
    <img  class ="dressImage" src="${dressList[i].imageUrl}" />
    <p>${dressList[i].description}</p>
    <p>Price:${dressList[i].Price}</p>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <p>Delivery Cost :${dressList[i].shippingCost.cost.deliveryCharge}</p>
    </li>`;
        const totalListDisplayBtnEle = document.getElementById("totalListBtn");
        const addToCartBtn = document.createElement('button');
        addToCartBtn.addEventListener('click', function () {
            showCart.push(dressList[i].name);
            showCart.push(dressList[i].Price);
        });
        addToCartBtn.innerText = "Add to Cart";
        addToCartBtn.classList.add("cartBtn")
        totalListDisplayBtnEle.appendChild(addToCartBtn);
        dressListCmp.appendChild(dressElementDescr);
    }
}
dressListInput();
/* please check this part of code ,as i want to extract just numbers from the Array for calculating the total sum,but the logic is not working
 */
let numbers = showCart.filter(numbersOnly);
document.write(numbers);

function numbersOnly(value) {
    if (typeof (value) === 'number') {
        return value;
    }
}

function addShoppingCartList() {
    let showListCmp = document.getElementById("showList");
    for (let i = 0; i < showCart.length; i++) {
        let newShowList = document.createElement("div")
        newShowList.innerHTML = `<span>${showCart[i]}</span>`
            ;
        showListCmp.appendChild(newShowList);

    }
};

document.getElementById("shoppingListBtn").addEventListener("click", addShoppingCartList);
/* Numbers extracted are used here to calculate the price,not working */
function showTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalPrice += numbers[i];
    }
    document.getElementById("totalPrice").innerHTML = `Total Price : ${totalPrice} €`;
};
document.getElementById("finalPriceBtn").addEventListener("click", showTotalPrice);

    async function loadData(){
        try {
            console.log("loadddddd");
            
            const res = await fetch("http://localhost:4000/api/cart/loaddata")
           
            console.log(res);
            
            const data = await res.json()
            console.log(data);
            
            let str = ""

            data.forEach(prod => {
                let price = prod.price * prod.quantity

                str += `
                <div class="content">
                    <div><img src="${prod.images}" alt="product"></div>
                    <div>
                        <p class="brand">${prod.brandname}</p>
                        <p class="title">${prod.mobname} (${prod.color}, ${prod.storage}GB)</p>
                        <p class="price">₹${price}</p>
                        <div class="quantity">
                            <div onclick="minus(${prod.quantity}, '${prod._id}')">-</div>
                            <div class="qty">${prod.quantity}</div>
                            <div onclick="plus(${prod.quantity}, '${prod._id}')">+</div>
                        </div>
                        <button onclick="removeItem('${prod._id}')">Remove</button>
                    </div>
                </div>
                `
            })

            document.getElementById("products").innerHTML = str

        } catch (error) {
            console.log(error)
        }
    }
    loadData()



    async function plus(quantity, id){
        quantity++
        try {
            const res = await fetch(`http://localhost:4000/api/cart/plus/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity })
            })

            if(res.status === 200){
                console.log("Quantity increased")
                alert("products increased")
                loadData()
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    async function minus(quantity, id){
        if(quantity <= 1){
            return removeItem(id)
        }

        quantity--
        try {
            const res = await fetch(`http://localhost:4000/api/cart/minus/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity })
            })

            if(res.status === 200){
                console.log("Quantity decreased")
                alert("products decreased")
                loadData()
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    async function removeItem(id){
        try {
            const res = await fetch(`http://localhost:4000/api/cart/remove/${id}`)

            if(res.status === 200){
                console.log("Item removed from cart")
                alert("item removed from cart")
                loadData()
            } else {
                const err = await res.json()
                alert(err.error)
            }

        } catch (error) {
            console.log("Failed to remove item:", error)
        }
    }

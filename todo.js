$(document).ready(function () {
    // Write code here!
    // One: Target
    // Two: Add Event Listener
    // Three: Retarget (optional)
    // Four: Add Effect
    $("form").submit(function (event) {
        event.preventDefault()
        const value = $("#title").val()
        // const index = $(".list-item").index();
        // const listValues = $(".list-item").innerText;
        // console.log("index ", index);

        $("form").trigger("reset")
        if (value === "" || value === null) {
            alert('Write something')
            return false
        } else {
            const listValues = $(".list-item").get();
            // console.log("listValues ", listValues);
            let addToList = true;
            listValues.forEach(list => {
                if (list.innerText === value) {
                    alert('Already exists in list')
                    return addToList = false
                }
            })
            const itemNumber = listValues.length;
            if (addToList) {
                const delButton = `<span class='close'><button class='btn' id='del-btn-${itemNumber}'>X</button></span>`
                $("#list ol").append("<li class='list-item'>" + value + delButton + "</li>")

                const id = `#del-btn-${itemNumber}`;
                $(id).click(function ($event) {
                    $event.preventDefault();
                    // console.log("$event: ", $event)
                    // console.log("previousElementSibling: ", $event.currentTarget
                    //     .parentElement.parentElement)
                    const listItemToDelete = $event.currentTarget
                        .parentElement.parentElement;
                    listItemToDelete.remove();
                })
            }
        }
    })


    // $("#add").click(function () {

    //     const value = $("#title").val()
    //     $("#list ol").append("<li>" + value + "</li>")
    // })

    $("#clear").click(function () {
        $(".list-item").remove()
    })


})
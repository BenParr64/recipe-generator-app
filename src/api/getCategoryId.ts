const getCategoryId = (type: "malt" | "hop") => {
    switch(type){
        case "malt": {
            return 557
        }
        case "hop": {
            return 558
        }
    }
}

export {getCategoryId}
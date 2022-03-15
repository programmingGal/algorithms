// this works: 

const arr = [1, 2, 2, 3, 2, 4, 4]

const findDups = (arr) => {
    const dups = []
    arr.map((a, index) => {
        const index1 = index
        arr.map((b, index) => {
            if (a === b && index1 !== index && !dups.includes(a))
                dups.push(a)
        })
    })
    console.log('dups: ', dups)
}

findDups(arr)



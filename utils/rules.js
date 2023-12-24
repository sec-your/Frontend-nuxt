// @ts-ignore
export const required =  (a) => {
    return {
        status: a.length,
        message: `:attribute: نباید خالی باشد.`
    }
};
export const email =  (a) => {
    return {
        status: a.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        message: `فرمت :attribute: صحیح نمی باشد.`
    }
};
export const phone =  (a) => {
    return {
        status: a.match(/^09\d{9}$/),
        message: `فرمت :attribute: باید 09xx xxx xxxx باشد.`
    }
};
export const min =  (a, min) => {
    return {
        status: a.length >= Number(min),
        message: `:attribute: باید حداقل ${min} کاراکتر باشد.`
    }
};

export const max =  (a, max) => {
    return {
        status: a.length <= Number(max),
        message: `:attribute: باید حداکثر ${max} کاراکتر باشد.`
    }
};

// @ts-ignore
export const same =  (a, name, b) => {
    console.log(a, b)
    return {
        status: a == b,
        message: `:attribute: با ${name} یکی نیست.`
    }
};
/**
 * Created by cuilanqing on 2017/5/23.
 */

export const request = (url, method, body) => {
    let isOK;

    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body
        }).then((response) => {
            if (response.ok) {
                isOK = true
            }else {
                isOK = false
            }
            return response.json()
        }).then((responseData) => {
            if (isOK) {
                resolve(responseData)
            }else {
                reject(responseData)
            }
        }).catch((error) => {
            reject(error)
        })
    });
};
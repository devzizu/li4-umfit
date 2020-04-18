export {}

var baseURL: string = "http://192.168.1.77:5000/api/planoalimentar";

export async function getListaRefeicoes () {

    const res = fetch(baseURL + "/refeicoes", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            valueST: localStorage.getItem("token")
        })
    });
    

    return res;
}

export async function setPlanoAlimentar( pt:any ){

    const res = fetch(baseURL + "/add", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pt)
    });
    

    return res;
}
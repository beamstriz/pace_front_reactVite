export async function filtrarCadastroPauta(datas, horas){
   
    const arrayNovaData = [];
        for(let i = 0; i < datas.length; i++) {
                const dia = datas[i].split("/")[0];
                const mes = datas[i].split("/")[1];
                const ano = datas[i].split("/")[2];
            if(dia.length <= 1 && mes.length<=1){
                arrayNovaData.push( `${ano}/0${mes}/0${dia}`);
            
            } else if(dia.length <= 1){
                arrayNovaData.push( `${ano}/${mes}/0${dia}`);

            } else if(mes.length <= 1){
                arrayNovaData.push( `${ano}/0${mes}/${dia}`);

            } else{
                `${ano}/${mes}/${dia}`;
            }
        }

        const arrayNovaHora = [];
        for(let i = 0; i < horas.length; i++) {
                const h = horas[i].split(":")[0];
                const min = horas[i].split(":")[1];

            if(h.length <= 1 ){
                arrayNovaHora.push( `0${h}:${min}`);
            }else if(min.length <= 1 ){
                arrayNovaHora.push( `${h}:0${min}`);
            }else{
                `${h}:${min}`;
            }
        }

        return {arrayNovaData, arrayNovaHora}

}
function calcular(tipo, valor) {
    
    if(tipo === 'acao') {
        //Limpar campo
        if(valor === 'c') {
            document.getElementById('resultado').value = '';
        }

        //adicionar ações
        if( valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }

        //Calculo
        if( valor === '=') {
            var resultado = eval(document.getElementById('resultado').value);

            document.getElementById('resultado').value = resultado;
        }
    //adicionar valores
    } else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor;
    }
}
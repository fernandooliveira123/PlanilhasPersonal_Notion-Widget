let idade = parseInt(prompt("Insira sua idade:"));
let sexo = prompt("Insira M ou F:").toLowerCase();
let protocolo = prompt("Escolha o protocolo, 3 ou 7 dobras? Digite apenas o nº:");

if (sexo === "m") {
    alert("Insira as dobras cutâneas");

    if (protocolo === "3") {
        let peitoral = parseFloat(prompt("Dobra Peitoral:"));
        let abdomem = parseFloat(prompt("Dobra cutânea abdominal:"));
        let coxamedia = parseFloat(prompt("Dobra coxa média:"));

        let somatorioDobras = peitoral + abdomem + coxamedia;
        let densidade = 1.109380 - (0.0008267 * somatorioDobras) + (0.0000016 * Math.pow(somatorioDobras, 2)) - (0.0002575 * idade);
        let percentualGordura = (4.95 / densidade - 4.5) * 100;

        alert(`Seu percentual de gordura é: ${percentualGordura.toFixed(2)}%`);
    } else if (protocolo === "7") {
        let peitoral = parseFloat(prompt("Dobra Peitoral (mm):"));
        let abdominal = parseFloat(prompt("Dobra Abdominal (mm):"));
        let coxa = parseFloat(prompt("Dobra Coxa Média (mm):"));
        let triceps = parseFloat(prompt("Dobra Tricipital (mm):"));
        let subescapular = parseFloat(prompt("Dobra Subescapular (mm):"));
        let axilar = parseFloat(prompt("Dobra Axilar Média (mm):"));
        let suprailiaca = parseFloat(prompt("Dobra Supra-ilíaca (mm):"));

        let somatorio = peitoral + abdominal + coxa + triceps + subescapular + axilar + suprailiaca;
        let densidade = 1.112 - (0.00043499 * somatorio) + (0.00000055 * Math.pow(somatorio, 2)) - (0.00028826 * idade);
        let percentualGordura = (4.95 / densidade - 4.5) * 100;

        alert(`Seu percentual de gordura é: ${percentualGordura.toFixed(2)}%`);
    }

} else if (sexo === "f") {
    alert("Insira as dobras cutâneas");

    if (protocolo === "3") {
        let triceps = parseFloat(prompt("Insira a dobra Triciptal:"));
        let suprailiaca = parseFloat(prompt("Insira a dobra Supra-ilíaca:"));
        let coxamedia = parseFloat(prompt("Insira a dobra cutânea coxa média:"));

        let somatorioDobras = triceps + suprailiaca + coxamedia;
        let densidade = 1.0994921 - (0.0009929 * somatorioDobras) + (0.0000023 * Math.pow(somatorioDobras, 2)) - (0.0001392 * idade);
        let percentualGordura = (4.95 / densidade - 4.5) * 100;

        alert(`Seu percentual de gordura é: ${percentualGordura.toFixed(2)}%`);
    } else if (protocolo === "7") {
        let triceps = parseFloat(prompt("Dobra Tricipital (mm):"));
        let subescapular = parseFloat(prompt("Dobra Subescapular (mm):"));
        let peitoral = parseFloat(prompt("Dobra Peitoral (mm):"));
        let abdominal = parseFloat(prompt("Dobra Abdominal (mm):"));
        let coxa = parseFloat(prompt("Dobra Coxa Média (mm):"));
        let suprailiaca = parseFloat(prompt("Dobra Supra-ilíaca (mm):"));
        let axilar = parseFloat(prompt("Dobra Axilar Média (mm):"));

        let somatorio = triceps + subescapular + peitoral + abdominal + coxa + suprailiaca + axilar;
        let densidade = 1.0970 - (0.00046971 * somatorio) + (0.00000056 * Math.pow(somatorio, 2)) - (0.00012828 * idade);
        let percentualGordura = (4.95 / densidade - 4.5) * 100;

        alert(`Seu percentual de gordura é: ${percentualGordura.toFixed(2)}%`);
    }
}

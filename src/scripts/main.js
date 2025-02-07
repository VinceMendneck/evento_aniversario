// Definindo a data do evento em UTC-3 (Brasília)
const dataDoEvento = moment.tz('2025-10-20 06:00:00', 'YYYY-MM-DD HH:mm:ss', 'America/Sao_Paulo');

const contaAsHoras = setInterval(function() {
    const agora = moment.tz('America/Sao_Paulo');
    const distanciaAteOEvento = moment.duration(dataDoEvento.diff(agora));

    if (distanciaAteOEvento.asMilliseconds() < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
        return;
    }

    // Calcula anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(distanciaAteOEvento.asYears());
    const meses = Math.floor(distanciaAteOEvento.subtract(anos, 'years').asMonths());
    const dias = Math.floor(distanciaAteOEvento.subtract(meses, 'months').asDays());
    const horas = Math.floor(distanciaAteOEvento.subtract(dias, 'days').asHours());
    const minutos = Math.floor(distanciaAteOEvento.subtract(horas, 'hours').asMinutes());
    const segundos = Math.floor(distanciaAteOEvento.subtract(minutos, 'minutes').asSeconds());

    let contadorTexto = 'VOCE FOI CONVOCADO PARA O MEU BOOTCAMP DE ANIVERSARIO. SE APRESENTE EM:<br>';
    if (anos > 0) contadorTexto += `${anos}a `;
    if (meses > 0) contadorTexto += `${meses}m `;
    contadorTexto += `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById('contador').innerHTML = contadorTexto;
}, 1000);
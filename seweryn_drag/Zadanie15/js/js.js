let number = prompt("Podaj lliczbę startową");
let finish = prompt("Podaj lliczbę końcową");


document.write('<table><tr><th>Liczba</th><th>Liczba do drugiej potęgi</th></tr>');
for (let i=number;i<=finish;i++)
{
    document.write('<tr><td>'+i+'</td><td>'+i*i+'</td></tr>');
}
document.write('</table>');
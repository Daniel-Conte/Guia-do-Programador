"use strict";
// Mesmo já existindo namespaces com esses nomes, não irá gerar erro
// Todos os namespaces com o mesmo nome serão agrupados em 1 só, então é possível separar as funcionalidades em arquivos diferentes
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        function triangulo(base, altura) {
            return (base * altura) / 2;
        }
        Area.triangulo = triangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));

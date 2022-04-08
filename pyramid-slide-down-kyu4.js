function longestSlideDown (pyramid) {
    const resultadoPiramide = pyramid.reduceRight((prev, actual) =>
        actual.map((x, i) => {return x + Math.max(prev[i], prev[i + 1])})
    )[0];
    return resultadoPiramide
}
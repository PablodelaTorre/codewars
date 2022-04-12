class User {
    constructor () {
        this.rank = -8;
        this.progress = 0
    }
    incProgress(r) {
        if (r === 0 || r > 8 || r < -8) {
            throw new Error("Rango invalido");
        }
        const diferencia = r > 0 && this.rank < 0 ? r - this.rank - 1 : this.rank > 0 && r < 0 ? r - this.rank + 1 : r - this.rank;

        if (diferencia > 0) {
            this.progress += 10 * diferencia * diferencia;
        } else if (diferencia === 0) {
            this.progress += 3;
        } else if (diferencia < 0) {
            this.progress += 1;
        }
        while (this.progress >= 100) {
            this.progress -= 100;
            this.rank++;
            if (this.rank > 8) {
                this.rank = 8;
            }
            if (this.rank == 0) {
                this.rank = 1;
            }
        }
        if (this.rank == 8) {
            this.progress = 0;
        }
        return this;
    }
}

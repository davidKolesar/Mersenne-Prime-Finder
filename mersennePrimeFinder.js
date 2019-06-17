//sqrt for BigInt
function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }
 
    function sqrt(value) {
        if (value < 0n) {
            throw 'square root of negative numbers is not supported'
        }
 
        if (value < 2n) {
            return value;
        }
        return newtonIteration(value, 1n);
    }

    function isPrime(p) {
        if (p == 2n) {
            return true;
        } else if (p <= 1n || p % 2n === 0n) {
            return false;
        } else {
            var to = sqrt(p);
            for (var i = 3n; i <= to; i += 2n)
            if (p % i == 0n) {
                return false;
            }
            return true;
        }
    }
 
    function isMersennePrime(p) {
        if (p == 2n) {
            return true;
        } else {
            var m_p = (1n << p) - 1n;
            var s = 4n;
            for (var i = 3n; i <= p; i++) {
                s = (s * s - 2n) % m_p;
            }
            return s === 0n;
        }
    }
 
//uses pseudorandomg "guess and check" method
    var  upb = 999999999;
	randomTestNumber = Math.random() * (999999999 - 100000000) + 100000000;
    var tm = Date.now();
    for (var randomTestNumber = 3n; randomTestNumber <= upb; randomTestNumber += 2n){
        if (isPrime(randomTestNumber) && isMersennePrime(randomTestNumber)) {
            console.log("M" + randomTestNumber);
        }
    }
    console.log(`... Took: ${Date.now()-tm} ms`);

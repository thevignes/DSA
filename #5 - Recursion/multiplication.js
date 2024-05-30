function test(n, mul) {
    if (10 < mul) {
        return  ;
    }
    console.log(`${mul} * ${n} = `,mul* n)
   test(n,mul + 1)  ;

}
test(4, 1); 

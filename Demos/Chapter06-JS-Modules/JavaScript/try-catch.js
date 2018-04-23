try {
        doStuff();

        doSomethingElse();

}
catch(err) {
    // Block to handle errors
    console.log(err);
}
finally {
    // executs whether error is thrown
    // or not. clean up resources, such
    // as cancelling setInterval()
}


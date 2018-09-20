describe('palindrome form', function () {
	var palindromeWord = element(by.id('originalWord'));
    var submitButton = element(by.id('button1'));
    var palindromeResult = element(by.id('palindromeResult'));
	
	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('http://xndev.com/palindrome/');
	});
    it('should correctly detect a palindrome', async function () {
        await palindromeWord.sendKeys('racecar');
		
		submitButton.click();
		
		expect(await palindromeResult.getText()).toContain('Yes');
    })
    it('should correctly detect a NON-palindrome', async function () {
        await palindromeWord.sendKeys('Busdriver');
		
		submitButton.click();
		
		expect(await palindromeResult.getText()).toContain('No');
    })
})
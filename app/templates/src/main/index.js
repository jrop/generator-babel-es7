// export a promise:
export default (async function() {
	for (let i = 0; i < 2; ++i)
		await new Promise((yes, no) => setTimeout(yes, 10))
})()

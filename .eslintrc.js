// 0 忽略 1 警告 2 错误
/**
 * no-unneeded-ternary Unnecessary use of conditional expression for default assignment
 * val ? val : defaultVal可以用val || defaultVal代替三元表达式
 */
module.exports = {
	extends: 'standard',
	// 让eslint支持es6语法
	parser: 'babel-eslint',
	rules: {
		// 关闭 eslint 强制单引号
		quotes: 0,
		// 强制使用分号结尾
		semi: [ 'error', 'always' ],
		// function() {} 括号前不要加空格
		'space-before-function-paren': [ 'error', 'never' ],
		// eslint认可Tab打空格
		'no-tabs': 'off',
		// 不校验缩进
    indent: 'off'
	}
};

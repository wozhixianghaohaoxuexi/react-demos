import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: '18.3' }},
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      // @fixable 数组的括号内的前后禁止有空格
      'array-bracket-spacing': ['error', 'never'],
      // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
      'block-spacing': ['error', 'always'],
      // @fixable if 与 else 的大括号风格必须一致
      'brace-style': 'error',
      // @fixable 对象的最后一个属性末尾不能有逗号
      'comma-dangle': ['error', 'never'],
      // @fixable 逗号前禁止有空格，逗号后必须要有空格
      'comma-spacing': 'error',
      // @fixable 禁止在行首写逗号
      'comma-style': 'error',
      // @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
      'computed-property-spacing': 'error',
      // @fixable 函数名和执行它的括号之间禁止有空格
      'func-call-spacing': 'error',
      // @fixable 函数括号内的参数不可换行
      'function-paren-newline': ['error', 'multiline'],
      // @fixable 隐式返回表达式的箭头函数需要在箭头同一行显示函数体部分
      'implicit-arrow-linebreak': ['error', 'beside'],
      // @fixable 一个缩进必须用2个空格替代
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: true
        }
      ],
      // @fixable jsx 中的属性必须用双引号
      'jsx-quotes': ['error', 'prefer-double'],
      // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'strict'
        }
      ],
      // @fixable 关键字前后必须有空格
      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            if: {
              after: false
            },
            for: {
              after: false
            },
            while: {
              after: false
            },
            catch: {
              after: false
            }
          }
        }
      ],
      // @fixable 类成员之间要有空行
      'lines-between-class-members': 'error',
      // 代码块嵌套的深度禁止超过 5 层
      'max-depth': ['error', 5],
      // new 后面的类名必须首字母大写
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: false,
          properties: true
        }
      ],
      // @fixable new 后面的类必须有小括号 var person = new Person();
      'new-parens': 'error',
      // 禁止使用 Array 构造函数
      'no-array-constructor': 'error',
      // @fixable 禁止出现超过1行的连续空行
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 1
        }
      ],
      // 禁止直接 new Object
      'no-new-object': 'error',
      // @fixable 禁止行尾有空格
      'no-trailing-spaces': 'error',
      // @fixable 使用 bar || 1 替代 bar ? bar : 1;
      'no-unneeded-ternary': 'error',
      // @fixable 禁止属性前有空格，比如 foo. bar()
      'no-whitespace-before-property': 'error',
      // @fixable 禁止 if 后面不加大括号而写两行代码
      'nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {
            while: 'below'
          }
        }
      ],
      // @fixable 大括号内的首尾必须有换行
      'object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true
        }
      ],
      // @fixable 强制在花括号中使用一致的空格
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: false
        }
      ],
      // @fixable 必须使用单引号，禁止使用双引号
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ],
      // @fixable 结尾必须有分号
      semi: [
        'error',
        'always',
        {
          omitLastInOneLineBlock: true
        }
      ],
      // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      // @fixable 分号必须写在行尾，禁止在行首出现
      'semi-style': ['error', 'last'],
      // @fixable if, function 等的大括号之前必须要有空格，比如 if(a) {
      'space-before-blocks': ['error', 'always'],
      // @fixable function 的小括号之前不可以有空格, 箭头函数除外(比如 async () => {})
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      // @fixable 小括号内的首尾禁止有空格
      'space-in-parens': ['error', 'never'],
      // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
      'space-infix-ops': 'error',
      // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
      // let foo = new Person();
      // bar = bar++;
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false
        }
      ],
      // @fixable case 的冒号前禁止有空格，冒号后必须有空格
      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      // @fixable 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
      'template-tag-spacing': ['error', 'never'],

      //
      //
      // ECMAScript 6
      // 这些规则与 ES6（即通常所说的 ES2015）有关
      //
      // @fixable 箭头函数的箭头前后必须有空格
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true
        }
      ],
      // @fixable generator 的 * 前面禁止有空格，后面必须有空格
      'generator-star-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      // 禁止对定义过的 class 重新赋值
      'no-class-assign': 'error',
      // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true
        }
      ],
      // 禁止重复 import 模块
      'no-duplicate-imports': 'error',
      // @fixable 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
      'no-useless-computed-key': 'error',
      // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
      'no-useless-constructor': 'error',
      // @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
      'no-useless-rename': 'error',
      // @fixable 禁止使用 var
      'no-var': 'error',
      // @fixable ... 的后面禁止有空格
      'rest-spread-spacing': ['error', 'never'],
      // 创建 Symbol 时必须传入参数
      'symbol-description': 'error',
      // @fixable ${name} 内的首尾禁止有空格
      'template-curly-spacing': ['error', 'never'],
      // @fixable yield* 后面必须要有空格
      'yield-star-spacing': ['error', 'after']
    }
  }
];

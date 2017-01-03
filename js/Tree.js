var Tree = function () {
    var cnt = [];
    var Matchs = [];
    var p;
    var Node = function (key1,key2, value1,value2, depth,xcord,ycord, parent) {
            return {
                key:    (typeof key === "undefined") ? null : key,
                value1: (typeof value1 === "undefined") ? null : value1,
                value2: (typeof value2 === "undefined") ? null : value2,
                depth:  (typeof depth === "undefined") ? null :  depth,
                xcord:  (typeof xcord === "undefined") ? null :  xcord,              
                ycord:  (typeof ycord === "undefined") ? null :  ycord,
                parent: (typeof parent === "undefined") ? null : parent
            };
        },
        
        root = new Node(),
        
          
        
        createMatchNodes = function(){
            Matchs = [];
            var level,exp; 
            var nro=1;
            for ( i = cnt.length-1; i >= 0;){ 
                for (e = 1; i >=  Math.pow(2, e) ; e++) { exp = e; }     
                     level = exp;
                if (Math.pow(2, exp) < i){  level = exp + 1 ; } 
                var m ={cnt1:cnt[i], cnt2:cnt[i-1], level:level,number:nro};
                Matchs.push(m);
               // console.log("i: "+ i );
             //   console.log(Matchs);                
                i--;  
                nro++;
            }
            return Matchs;
        
        },
        
        insertP = function ( key, value) {
            p={ key:key, name:value };
            cnt.push(p);
          //  console.log(cnt);
        };
 
    return {

        insertParticipante: function (key, value) {

            var keyInt = parseInt(key, 10);
            
            if (isNaN(keyInt)) {
                return undefined; // key must be a number
            } else {
                return insertP( keyInt, value );
            }
        },
        
         createMatchs: function (key, value) {
              return createMatchNodes();
        },
     
	};
};

/*
 * Tests
 */
//
//var ipTree = new BST();
//ipTree.insert(4, "test4");
//ipTree.insert(1, "test1");
//ipTree.insert(10, "test10");
//ipTree.insert(2, "test2");
//ipTree.insert(3, "test3");
//ipTree.insert(9, "test9");
//ipTree.insert(8, "test8");
//ipTree.insert(5, "test5");
//ipTree.insert(7, "test7");
//ipTree.insert(6, "test6");
//
//ipTree.traverse(function (key, value) {
//    print("The value of " + key + " is " + value + ".");
//});
//
//print("Searching for 3 results in: " + ipTree.search(3));
//
//print("Min is " + ipTree.min());
//print("Max is " + ipTree.max());
//
//print("The successor of root is: " + ipTree.successor());
//print("The predecessor of root is: " + ipTree.predecessor());

/*
 * License:
 *
 * Copyright (c) 2011 Trevor Lalish-Menagh (http://www.trevmex.com/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
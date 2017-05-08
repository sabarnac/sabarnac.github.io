---
layout: post
title: "A Brainfuck Interpreter"
date: 2017-05-08 12:02:10
category: brainfuck project
---
<blockquote class="imgur-embed-pub" lang="en" data-id="ctCM6rb" style="width: 100%;"><a href="//imgur.com/ctCM6rb">Brainfuck</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

I'm sure you've heard of this simple little *esoteric* programming language, or at least seen that garble of text somewhere whenever there's a discussion on languages that wanna make you tear your hair out. While it's not Malbolge levels of torture, it's simple construct can actually be really confusing to deal with if you don't track what's happening carefully.

Let's take a quick look at the language. There are no identifiers, syntax or anything like any programming language you would use for real applications. Only eight basic commands are used in Brainfuck - ".", ",", "+", "-", ">", "<", "[" and "]". All data related operations occur on an (theoretically) infinite sequence of cells, making it operate similar to a Turing machine. Using the eight commands, you can perform various tasks, and the language is Turing complete.

Although the commands are very simple, if the task becomes even slightly complex, the code can look very messy or very confusing, depending if you want to keep the code simple or efficient. So, although theoretically the language can perform a wide range of tasks, you obviously wouldn't want to use it anyways because of the problems it can cause.

Seeing that all the language consists of only single character commands, coding a compiler and interpreter should be pretty simple. The only real problem is having infinite cells for the program to write into. This could be solved through dynamic allocation of cells as and when required, and this is limited by the heap memory available.

So I decided, since this was a very simple language, to write a interpreter and compiler for it. First I started off with the interpreter, seeing that it would be simpler. I created some basic basic data structures for use by the interpreter.

* A data structure for the nodes of the cell that form a double linked list, for two-way traveral.

```c
    struct program_list_node {
        uint8_t value ;                            //The value of the node in the list.
        struct program_list_node * previous_node ; //The pointer to the previous node in the list, if any.
        struct program_list_node * next_node ;     //The pointer to the next node in the list, if any.
    } ;
```

* A data structure for the loop control that form a stack. The nodes just store the position in the program file where the loop starts.

```c
    struct loop_stack_node {
        long long start_pointer_position ;         //The input pointer position for the start of the loop.
        struct loop_stack_node * outer_loop_node ; //The pointer to the outer loop of the loop, if any.
    } ;
```

* A data structure to store the instruction pointers' current positiona and value.

```c
    struct input_pointer {
        long long position ;                       //Current position of the input pointer.
        char value ;                               //Value of the character in the current input position.
    } ;
```

* A data structure for storing the source file pointer, the instruction pointer details as well as the interpreter status and message.

```c
    struct input_file {
        FILE * source ;                            //The program file being interpreted.
        struct input_pointer pointer ;             //The current input position details.
        uint8_t status ;                           //The status of the program being interpreted.
        char message [ 65536 ] ;                   //A message about the current status of the program being interpreted.
    } ;
```

* A data structure that stores the current cells' address and the top loops' address.

```c
    struct program_list {
        struct program_list_node * list_position ; //The pointer to the current position in the program list.
        struct loop_stack_node * loop_top ;        //The pointer to the current position in the loop.
    } ;
```

* Finally, a data structure that contains the previous two data structures, as well as the program input and output files.

```c
    struct program_details {
        struct input_file file ;                   //The program file.
        struct program_list list ;                 //The program list
        FILE * progin ;                            //The program input file.
        FILE * progout ;                           //The program output file.
    } ;
```

The program quickly checks whether certain parameters have been provided. These then get passed to an initializer function that sets up the values of the data structures. Control is then handed over to the interpreter execution function, which uses the rules of the language dispersed through various functions to execute the brainfuck code. Upon completion, a cleanup function to clear away the data structures is called and finally the interpreter ends its execution.

```c
    if ( ( argc < 2 ) || ( argc > 5 ) ) { .. }          //Check if parameters have been provided for interpretation and execution of a program.
    interpreter_init ( argv [ 1 ] , output , input ) ;  //Initialize the interpreter.
    interpreter_exec ( ) ;                              //Execute the interpreter.
    interpreter_clean ( ) ;                             //Clean up after the interpreter.
    return program . file . status ;                    //Return the final program status.
```

There is only one kind of error that can occur in a Brainfuck program, and that's unmatched loop braces. The program handles this by halting execution and terminating immediately, with an error message stating the error and the byte location where the error occured. The interpreter can also run out of heap memory for execution. There is no error handling for such a situation, which I need to take care of. This error can be temporarily fixed by compiling the interpreter code to start out with more heap memory so as to overflow on it. It's not the perfect solution, but it'll do and is better than just throwing an error for such type of errors.

Another kind of error can occur - when the source file or program input file cannot be opened. This also leads to halting of the program and termination. The only change required here is to allow non-existence of a program file input IF the Brainfuck program requires no input. Parsing through the entire file searching for even a single input command should work for this case, although for very lengthy programs it can take time. Another option is to not care and start execution until an input is requested, and only throw an error when such a scenario is reached. I'll most likely opt for the latter approach, since it keeps things simpler and faster.

The interpreter source code, along with a Windows and Linux executable, is available at Github. The Windows executuble was compiled using Orwell Dev-C++, and the Linux executable was compiled using GCC 5.4.0 on the Ubuntu Linux Layer added onto Windows with no changes in C code between the two (since I did try to ensure to use simple, cross-platform code).

The compiler side of things may be a bit trickier to implement. The lexical, syntax and semantic analysis can be skipped, since all commands are independent and single character only, allowing for super simple parsing. The only problem to deal with is handling the sequence of cells, although I do have an idea for that. I also plan to compile to LLVM, to allow for platform-agnostic compilation. The LLVM code then be compiled manually to machine dependent code which I will leave to the end user of the compiler. However, I don't plan on starting working on the compiler anytime soon, and optimizations to the interpreter won't be a priority for me as well, since I plan to work on a mini-learning project in Unity just to get a hang of things with the engine.

The link to the Github repo with the complete code and executables is [https://github.com/sabarnac/brainf-interpreter-compiler](https://github.com/sabarnac/brainf-interpreter-compiler)

Hope you guys have a good day! :D
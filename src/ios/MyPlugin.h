#import <Cordova/CDV.h>

@interface MyPlugin : CDVPlugin

- (void) echo:(CDVInvokedURLCommand*)command;

@end
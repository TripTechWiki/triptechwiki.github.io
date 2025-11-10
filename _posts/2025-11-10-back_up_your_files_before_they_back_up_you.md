---
author: Golden_Wither
title: Back Up Your Files Before They Back Up You
tags: open_source blognov
---

Microsoft is getting on my nerves! Or at least one of their apps is… This time, its [Phone Link](https://en.wikipedia.org/wiki/Phone_Link).

<!-- excerpt -->

Context: I'm cool enough to have an Android phone, which means I can connect it to my Windows computer using Microsoft's Phone Link app to see my messages, photos, etc. Included in this selection of tools is the ability to view/sync your phone's files with your computer over bluetooth.

For some reason, this has never worked properly for me. I've tried removing and re-adding my phone, restarting everything, the works. Only the folders ever showed up, and the sync progress bar always got inexplicably stuck. One day, I found out that I could just disable the feature, so I did that since it didn't work anyway.

Even though everything disappeared from the quick access sidebar, all the empty folders it created stuck around. "Whatever", I thought to myself, "I'll just delete them. I already disabled the link feature anyway." Just to be safe, I double-checked that my phone was disconnected and hit delete…

`🚫 Error: File Unavailable`

"Huh, that's odd… [File Locksmith](https://learn.microsoft.com/en-us/windows/powertoys/file-locksmith) doesn't show that the file is being used anywhere or anything…  I guess I'll shut down Phone Link and try again?" (Yes, I think with hyperlinks.)

`🚫 Error: File Unavailable`

"Whatever, I'll just force delete them."

One search and command execution later… They disappeared! Problem solved, right?

Unfortunately, a few days later I noticed that all the pictures on my phone had been deleted… 

⚠️PANIC!!! 🫨

*Dread sets in…* "What happened?!?! Can I run [Recuva](https://www.ccleaner.com/recuva) or something on my phone???" I ran it on my computer just to be sure… but nothing came up. Blarg.

After some searching and a couple sketchy app downloads, it turns out that Phone Link had moved everything to my recycle bin on my phone (even though the file feature was still disabled??), but hadn't permanently deleted anything yet… Sheesh. Crisis averted.

Still though, it made me realize just how important backing up your files can be. If I hadn't noticed for another few weeks (which is possible, as I don't use my phone camera very often), everything would have just vanished. So, I promptly set up some more [Syncthing](https://syncthing.net) folders between my phone and computer just in case.

BACK UP YOUR FILES BEFORE THEY BACK UP YOU

---

Word Count: 384\
Running Total: 2171
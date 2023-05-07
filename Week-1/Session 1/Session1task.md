
# WEB FUNDAMENTALS ASSSIGNMENT
**Q1. What is a Protocol stack, and how is it used in web development?**
Protocol stack is layered collection of protocols that works together to provide communication between client and server over Internet.
Protocol stack consists of 4 layers: Link layer, Network layer, Transport layer, Application layer.
![Protocol Stack](https://cdn.kastatic.org/ka-perseus-images/6a0cd3a5b7e709c2f637c959ba98705ad21e4e3c.svg) 
Each protocol operates at a different layer, building functionality on top of the layer below it.

##### Link and Network Layer:
The two computing devices need a physical mechanism to send digital data to each other. They send electromagnetic signals either over a wired(Ethernet) or wireless(Wireless LAN) connection and interpret the signal as bits.We need addressing protocols to uniquely identify who is sending data and who should receive the data. Every node on the Internet is identified with an IP address. The route between any two computers on the Internet isn't just a straight path from A to B. The data must pass from router to router until it finally reaches its destination, a strategy that comes from the Internet routing protocol.

![](https://cdn.kastatic.org/ka-perseus-images/90f62a3d5a9f13d4f5dc6dcc88d3368657704ee9.svg)

##### Transport Layer:
Data needs to be broken up into small packets, which are then reassembled at the destination. The Transmission Control Protocol (TCP) is used to ensure reliable transport of those packets, with sequencing, acknowledgement, and retries. A faster but less reliable transport protocol is the User Datagram Protocol (UDP).

##### Application layer:
The HTTP protocol supports a mix of network configurations. The browser is one of the many possible clients which can raise a request. The requests are sent, and responses are received over the TCP/IP layer. We can visit a website by typing a domain name in the browser address bar, since the browser knows how to turn the domain into an IP address using the Domain Name System (DNS). When the data contains private information, it needs to be transported securely from the sender to the destination. The Transport Layer Security (TLS) protocol uses algorithms to encrypt the data, while certificate authorities help users trust the encryption.

In web development, when a message is sent through the Internet, it doesn't use every protocol in the suite. It does use at least one protocol from every layer, however. When you're loading a webpage from a domain your browser has never visited before, your browser may need to make a DNS request. This stack of protocols is used when a DNS request is sent through the Internet.

![](https://cdn.kastatic.org/ka-perseus-images/918dc8144c8813382ea3ffbbf76db1535d97421a.svg)

Then your browser will make an HTTP request to fetch the webpage. This protocol stack is used when an HTTP request is sent through the Internet.

![](https://cdn.kastatic.org/ka-perseus-images/49e49dd1e8744a2422215288147e00443fc0916c.svg)

If the webpage is served over HTTPS, then the stack includes multiple protocols at the application layer (both HTTP and TLS)

![](https://cdn.kastatic.org/ka-perseus-images/de452773728c35833566ddae2f78289ecae61340.svg)

**Q2.What is different type of servers, how do they differ in terms of functionality and performance?**

Different servers do different jobs, from serving email and video to protecting internal networks and hosting Web sites.

**Application servers:**  Application server is a server which is used to host the application. Application server are system software upon which web application or desktop applications run. It consists of web server connector, computer programming language, database connector, runtime libraries and the Administration code. Application server frameworks are Software framework for building application server.

**Client servers:**  Client server is a distributed application that partition task or workload between the providers of resource or service called servers and service requesters are called as client. Both clients and server communicate with each other over computer network on separate software hardware, but both client and server by reside in the system. Client does not share any of its resources but request resources from server.

**Collaboration Servers:**  The goal of collaboration server is to support conduct of shared activities of software development teams. Its main concern is to provide scheduling support for each project, team or individual. Also provides alerts for schedule reviews and collaboration event.

**Mail Servers:**  Mail server is server that handles and delivers email over a network, usually over the internet. It receives email from client computers and deliver them to other mail server. It also delivers email to client computers.

**FTP Servers:**  FTP server is used for transferring files supporting sub directories, log in and set of manipulation commands. It can also be used to upload HTML pages on HTTP server or download log files to remote PC.

**Proxy Servers:**  Proxy server is a server application that acts as an intermediary for request from clients seeking resources from servers that provide those resources. Proxy server functions behalf of the client when requesting service, potentially masking the true origin of the request to the resource server.

**Telnet Servers:**  Telnet server is an application protocol used to provide bidirectional interactive text orientated communication service using virtual terminal connection over internet. Telnet client application are available for virtually all computer platforms. On remote host, telnet server provides access to the command-line interface. Using TCP, user data and telnet control information is transferred on data connection. It enables users to log on to a host computer and perform tasks as if they're working on the remote computer itself.

**Real Time Communication Server:**  Real time communication server is also known as chat server or IRC server. It refers to instant messaging servers.

**Open Source Servers:**  Open source server is a public domain software designed to deliver web pages over www. It runs on computers that is connected to the internet. Open source servers support file uploading and downloading using FTP, provides security features. It also supports other communication protocols.

**Web Server:** Web server is a computer software and underlying hardware that Accept request through HTTP. HTTP is a network protocol which is used to distribute the web pages. Using HTTP web browser send request to the server and initiate the communication. Then web server responds with the resources or content or error message. web server also accepts and store the resources sent from the user agent.

**MailServer:** Almost as ubiquitous and crucial as Webservers, mail servers move and store mail over corporate networks (via LANs and WANs) and across the Internet.

**Virtual Servers:**  Virtual server is a server that is located in an offsite data center and its resources are shared by multiple users who have control over it. In other words, we can say that virtual server converts one physical server into multiple virtual machines where each can run their operating systems. Virtual servers are a more efficient use of power and can increase a server's utilization from the typical 15 percent to as much as 80 percent. They are used for variety of applications from remote file access to web design and development.

**Q3. What is web hosting? What are different types of hosting services available for websites?**

Web hosting service is a type of Internet hosting service that hosts websites for clients , i.e. offers the facilities required them to create and maintain a site and makes it accessible on the World Wide Web. It is a service provided by companies (e.g., the web host) that sell or lease space on a server where you store files that enable your website accessibility on the internet. These companies typically require you to own a domain. Once you purchase a web hosting plan, these companies store your site on their servers and assign it a unique DNS. The DNS is the address that allows people around the world to access your website. By purchasing a (shared hosting) website hosting package, you're buying space on their servers. It's similar to the space on the hard drive of a computer, and it being on their servers makes your website files accessible from anywhere.

##### Shared hosting

Shared hosting is perfect for entry-level website hosting. This is where your website will be stored on the same server as multiple other websites. With a shared hosting plan, all domains share the same server resources, such as RAM and CPU . However, because all resources are shared, the cost of shared hosting plans are relatively low, making them an excellent option for website owners in their beginning stages.
It often comes with many helpful tools such as: website builder tools, WordPress hosting, and the ability to email clients. The trade-off is that you're sharing the server with multiple other website owners. This means that surges in usage can ultimately affect your website's user experience. Shared hosting plans are ideal for website owners that do not receive a large amount of web traffic.

##### Cloud hosting

Cloud hosting is a hosting solution that works via a network and enables companies to consume the computing resource like a utility. This allows users to employ as many resources as they need without having to build and maintain their own computing infrastructure. The resources that are being used are spread across several servers, reducing the chance of any downtime due to a server malfunction.
Cloud-based hosting is scalable, meaning your site can grow over time, using as many resources as it requires and while the website owner only pays for what they need.

##### Managed hosting

Most hosting packages you will find online are likely to be managed. Hosting companies provide technical services such as hardware and software setup and configuration, maintenance, hardware replacement, technical support, patching, updating and monitoring. With managed hosting, the provider looks after the day-to-day management of the hardware, operating systems and standardised applications.

##### VPS hosting

A VPS hosting plan is the ultimate middle ground between a shared server and a dedicated server. It's ideal for website owners that need more control, but don't necessarily need a dedicated serve. Each website is hosted within its own space on the server, though it still shares a physical server with other users. While VPS hosting provides website owners with more customization and storage space, they're still not able to handle incredibly high traffic levels or spikes in usage meaning that the site performance can still be affected by other sites on the server.

##### Dedicated server hosting

Dedicated hosting gives website owners the most control over the server that their website is stored on. That's because the server is exclusively rented by you and your website is the only one stored on it. This means that you have full root and admin access, so you can control everything from security to operating system that you run.
However, all that control comes with a price. Usually, they are used by website owners with high levels of website traffic, and those who are in need of complete control of their servers. In addition, a high level of technical expertise is required for the installation and ongoing management of the server.

**Q4. What is scaling, why is it important for web applications? How does scaling differ for vertical and horizontal scaling?**

The scalability of an application can be measured by the number of requests it can effectively support simultaneously. The point at which an application can no longer handle additional requests effectively is the limit of its scalability. This limit is reached when a critical hardware resource runs out, requiring different or more machines.

Scaling these resources can include any combination of adjustments to CPU and physical memory (different or more machines), hard disk (bigger hard drives, less "live" data, solid state drives), and/or the network bandwidth (multiple network interface controllers, bigger NICs, fiber, etc.).

Scaling horizontally and scaling vertically are similar in that they both involve adding computing resources to your infrastructure. There are distinct differences between the two in terms of implementation and performance.

Horizontal scaling means scaling by adding more machines to your pool of resources (also described as "scaling out"), whereas vertical scaling refers to scaling by adding more power (e.g. CPU, RAM) to an existing machine (also described as "scaling up").

One of the fundamental differences between the two is that horizontal scaling requires breaking a sequential piece of logic into smaller pieces so that they can be executed in parallel across multiple machines. In many respects, vertical scaling is easier because the logic really doesn't need to change. Rather, you're just running the same code on higher-spec machines.

![](https://www.section.io/assets/images/blog/featured-images/horizontal-vs-vertical-scaling-diagram.png)

In choosing between the two, there are various factors to consider. These include:

- **Performance**  - Scaling out allows you to combine the power of multiple machines into a single virtual machine with the combined power of all of them. This means you're not limited to the capacity of a single unit. First, however, it's worth working out if you have enough resources within a single machine to meet your scalability needs.
- **Flexibility**  - If your system is solely designed for scaling up, you are effectively locked into a minimum price set by the hardware you are using. If you want the flexibility to choose the optimal configuration setup at any time to optimize cost and performance, scaling out might be a better option.
- **Regularity of Upgrades**  - Again, flexibility is important here. Building an application as a single large unit will make it more difficult to add or change pieces of code individually without bringing the entire system down. In order to deliver a more continuous upgrade process, it's easier to decouple your application and horizontally scale.
- **Redundancy**  - Horizontal scaling offers built-in redundancy in comparison to having only one system in vertical scaling, and thus a single point of failure.
- **Geographical Distribution**  - When you need to spread out an application across geographical regions or data centers in order to reduce geo-latency, comply with regulatory requirements, or handle disaster recovery scenarios, you don't have the option of putting your application in a single box. You have to distribute it.
- **Cost**  - As more large multi-core machines enter the market at significantly lower price points, consider if there are instances in which your application (or portions of your application) can be usefully packaged in a single box and will meet your performance and scalability goals. This might lead to reduced costs.

**Q5. What is SEO (Search Engine Optimization) and how can web developers optimize their websites for better search engine rankings?**

SEO is the process of taking steps to help a website or piece of content rank higher on Google. It means taking a piece of online content and optimizing it so search engines like Google show it towards the top of the page when someone searches for something.

When it comes to broader SEO, there are two equally important paths: on-page SEO and off-page SEO.On-page SEO is about building content to improve your rankings. This comes down to incorporating keywords into your pages and content, curating high-quality SEO copywriting content regularly, making sure your metatags and titles are keyword-rich and well-written, among other factors.

Off-page SEO is the optimization happening outside your website itself, such as earning backlinks. This part of the equation involves building relationships and creating content people want to share. Though it takes a lot of legwork, it's integral to technical SEO

 **Elements of Content**
If you are creating quality content that actually solved someone's problem, you are a standout, and that made it easy to rank. Just posting a piece of content with a bunch of keywords won't help. Your content needs to solve a problem or provide a solution to whatever brings the reader to your post.

SEO tips for creating the best content readers love and Google respects:
1. Understand user intent: You need to know what the reader wants to accomplish when they land on your page.
2. Develop a customer avatar: You also need to know who your reader is, what they like, what they dislike, and why they're there.

1. Break up the text: People have short attention spans, and writing giant walls of text doesn't work anymore; you need to break it up with plenty of headers and images.
2. Make it actionable: There's nothing worse than reading a piece of content and not getting everything you need to accomplish something. Your content should be thorough.

**Keyword Research and Selection**
Keywords even determine how you build links, including everything from the tactics you choose to how you plan on implementing them. Another common mistake people make is that they stop.Maybe they redesign their website or come out with a new marketing campaign. They do it for a week or two, update their pages, and then stop. They think keyword research is a one-and-done thing. In reality, it's the exact opposite. The best SEOs are constantly doing keyword research.

 **HTML**
Your site's HTML is an important piece of the SEO marketing puzzle. Without proper tags, headers, and descriptions, Google will have a hard time figuring out what your content is about and why it should rank higher than the competition.

Here are  most important SEO tips to keep in mind as you make HTML improvements to your site:
1. Use tools to help you: The various SEO marketing tools out there are worth the investment because they will help you identify HTML issues with your site. For example, Ahrefs tells you if a site has duplicate title tags or how many articles are missing meta descriptions.
2. Piggyback on the competition: Stealing is bad, but using your top-ranking competitors for inspiration isn't. If you're struggling to figure out what you should use for your title tag or meta description, see what the competition is doing.
3. Never stuff keywords: There's nothing worse than a keyword-stuffed meta description that reads horribly. Google will see right through it and may even penalize you if you do it enough.
4. Don't forget H2, H3, and H4 headers: We talked about H1 headers, but don't forget the rest. These are all important places where you should have your primary keywords to help tell Google which subject your article focuses on.

 **Site Architecture**
A good website architecture leads to a great user experience, which is important for SEO marketing. It focuses on things like fast loading times, a safe connection, and a mobile-friendly design.

There are three important factors to keep in mind as you improve your site's architecture:

1. Make sure you understand Core Web Vitals: You need to understand what these are, how they impact your rankings, and what you can do about them
2. Get a sitemap: Use something like the WordPress sitemap plugin if you have an extensive site. Getting a sitemap would help the real estate site rank for each address, dramatically increasing the number of keywords they rank for, their traffic, and their domain authority.

 **Trust**
Trust is getting increasingly important, and most of the recent Google updates have hit spammy and obscure websites. [TrustRank](http://www.seomastering.com/trust-rank-checker.php) is a way for Google to see whether your site is legit or not.

3 Tips to Build More Trust

1. Be patient: Trust isn't something that happens overnight. Sometimes, you just need to be patient and realize Google isn't in any hurry to crawl your site.
2. Understand intent: When someone searches for something in Google, they're looking to accomplish something. If you provide that solution, make sure you provide the whole solution.
3. Give them what they want: One great tip to prevent users from bouncing is to give them what they want as soon as they land on your site.

 **Links**
The importance of a solid link profile will vary from expert to expert. Building quality backlinks is about reaching out to the right sources and offering value in exchange for a solid link.

3 Tips to Improve Your Link Profile
1. Don't take shortcuts: There are no shortcuts in link building; you need to take the time and build them the right way.
2. Remove hazardous links: Google has something called the disavow tool that allows you to remove links that might be hurting your ability to rank
3. Don't forget internal linking: Internal linking is an important piece of the puzzle too; we shouldn't only worry about external links.

**Social**
Besides social signals directly from the searcher, there are other ways good results on social media will help you rank better.

3 Tips to Improve Your Social Sharing
1. Create great content: Creating the best quality content is the way to get shares, plain and simple. Google spends plenty of hours and more money than you can fathom preventing people from gaming the system.

1. Be consistent: Consistency is extremely important in SEO and social media. Posting consistently on social media requires you to have new content to share on a regular basis as well.
2. Make it easy: There are many plugins to promote social sharing, so you need to use something on your site.

 **Google's E-A-T Guidelines**
As you evaluate your SEO practices, you can analyze what Google uses to train human content evaluators.

4 Tips for Improving Your E-A-T Score

1. Do Your Research: This may seem obvious, but the best way to truly portray expertise, authority, and trustworthiness is to share accurate information. Bring in expert interviews or guest posts, when you're able to.
2. Be Thorough: Now that you're sure that your information is accurate, you'll also want to make sure it's comprehensive.
3. Speak to What You Know: When you are developing content for your website, stick with what you're about as a brand.
4. Speak to Your Audience's Need: On a similar note, you're only going to be able to build trustworthiness and authority in the mind of a reader if you actually speak to the topic that readers are coming to read. This will help readers actually see you as an authority and someone they can trust.

###

